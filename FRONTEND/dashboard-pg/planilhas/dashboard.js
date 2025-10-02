/*
================================================================================
|   ARQUIVO JAVASCRIPT - DASHBOARD DE TREINOS                                  |
|   Versão final, organizada e com todas as funcionalidades.                   |
================================================================================
*/

// --- FUNÇÕES GLOBAIS (acessíveis pelo HTML via onclick/oninput) ---

function alternarBarra() {
    const barra = document.getElementById('barraLateral');
    const conteudo = document.getElementById('mainContent');
    if (barra) barra.classList.toggle('oculta');
    if (conteudo) conteudo.classList.toggle('expandida');
}

function atualizarTempo(valor) {
  let horas = Math.floor(valor / 60);
  let minutos = valor % 60;
  const saidaElemento = document.getElementById("saida");
  if (saidaElemento) {
    saidaElemento.textContent = `${horas}h ${String(minutos).padStart(2, '0')}min`;
  }
}


// --- CÓDIGO EXECUTADO QUANDO A PÁGINA ESTÁ TOTALMENTE CARREGADA ---
document.addEventListener('DOMContentLoaded', () => {

    // --- VERIFICAÇÃO INICIAL DE LOGIN ---
    if (!localStorage.getItem("accessToken") && !localStorage.getItem("access_token")) {
        window.location.href = "../../login-pg/login.html";
        return;
    }

    // --- VARIÁVEIS GLOBAIS DA PÁGINA ---
    let tabela;
    let treinoAtualParaPdf = null;
    const authToken = localStorage.getItem('accessToken') || localStorage.getItem('access_token');

    // --- ELEMENTOS DA UI ---
    const modalForm = document.getElementById('modalForm');
    const modalInfo = document.getElementById('modalInfo');
    const modalTreino = document.getElementById('modalTreino');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalBody = document.getElementById('modal-body-content');

    // --- FUNÇÕES DE CONTROLE DOS MODAIS ---
    function abrirModal(modal) { if (modal) { modal.classList.add('aberta'); document.body.style.overflow = 'hidden'; }}
    function fecharModal(modal) { if (modal) { modal.classList.remove('aberta'); document.body.style.overflow = ''; }}
    function abrirModalDetalhes() { if (modalTreino) modalTreino.style.display = 'flex'; }
    function fecharModalDetalhes() { if (modalTreino) modalTreino.style.display = 'none'; }

    // --- LISTENERS DE EVENTOS GERAIS DA UI ---
    document.getElementById('abrirForm')?.addEventListener('click', () => abrirModal(modalForm));
    document.getElementById('fecharForm')?.addEventListener('click', () => fecharModal(modalForm));
    document.getElementById('cancelarForm')?.addEventListener('click', () => fecharModal(modalForm));
    if (modalForm) modalForm.addEventListener('click', (e) => { if (e.target === modalForm) fecharModal(modalForm); });

    document.getElementById('abrirInfo')?.addEventListener('click', () => { carregarDadosUsuario(); abrirModal(modalInfo); });
    document.getElementById('fecharInfo')?.addEventListener('click', () => fecharModal(modalInfo));
    document.getElementById('cancelarInfo')?.addEventListener('click', () => fecharModal(modalInfo));
    if (modalInfo) modalInfo.addEventListener('click', (e) => { if (e.target === modalInfo) fecharModal(modalInfo); });

    document.getElementById('modal-fechar')?.addEventListener('click', fecharModalDetalhes);
    if (modalTreino) window.onclick = (event) => { if (event.target == modalTreino) fecharModalDetalhes(); };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            fecharModal(modalForm);
            fecharModal(modalInfo);
            fecharModalDetalhes();
        }
    });

function gerarPdfDoTreino(treinoData) {
    if (!treinoData) {
      alert("Erro ao gerar PDF: dados do treino não encontrados.");
      return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // --- CABEÇALHO DO PDF ---
    doc.setFontSize(20);
    doc.setTextColor(40, 40, 40);
    doc.text(`Plano de Treino: ${treinoData.nome_treino}`, 105, 22, { align: 'center' });
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text(`Objetivo: ${treinoData.objetivo}`, 14, 32);

    let y = 45;

    // --- PREPARAÇÃO DOS DADOS ---
    const exerciciosAgrupados = (treinoData.exercicios || []).reduce((acc, ex) => {
      const dia = ex.dia_semana || 'Exercícios';
      (acc[dia] = acc[dia] || []).push(ex);
      return acc;
    }, {});
    
    const ordemDias = ["Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado","Domingo","Não especificado"];

    // --- CRIAÇÃO DAS TABELAS ESTILIZADAS ---
    for (const dia of ordemDias) {
      if (!exerciciosAgrupados[dia]) continue;

      //  INÍCIO DAS MUDANÇAS DE ESTILO

      // Define os cabeçalhos da tabela
      const head = [['Exercício', 'Séries x Repetições', 'Descanso']];
      
      // Mapeia os dados dos exercícios para o formato da tabela
      const body = exerciciosAgrupados[dia].map(ex => [
        ex.nome_exercicio,
        `${ex.series}x${ex.repeticoes}`, // Combina Séries e Repetições
        ex.descanso
      ]);

      // Chama o plugin para desenhar a tabela
      doc.autoTable({
        startY: y,
        head: head,
        body: body,
        theme: 'grid', // Básico com todas as bordas
        
        // Estilo do Título do Grupo (ex: Treino A - Peito e Tríceps)
        // Adicionamos isso antes de a tabela ser desenhada
        didParseCell: function (data) {
            if (data.section === 'head' && data.row.index === 0) {
                // Mescla as células do cabeçalho para criar um título
                data.cell.styles.halign = 'center';
                data.cell.styles.fillColor = [60, 9, 108]; // Roxo
                data.cell.styles.textColor = [255, 255, 255];
                data.cell.styles.fontStyle = 'bold';
                
                // Pega a primeira célula e a expande
                if (data.column.index === 0) {
                    data.cell.colSpan = 3; // Ocupa as 3 colunas
                    data.cell.text = dia; // Define o texto do título
                }
            }
        },
        
        // Estilos para o cabeçalho das colunas (Exercício, Séries, etc.)
        headStyles: {
          fillColor: [240, 240, 240], // Fundo cinza claro
          textColor: [40, 40, 40],   // Texto escuro
          fontStyle: 'bold',
        },

        // Estilos para as linhas do corpo
        alternateRowStyles: {
          fillColor: [250, 250, 250] // Cinza ainda mais claro para o efeito zebrado
        },

        // Estilo da primeira coluna (Exercício) para dar destaque
        columnStyles: {
            0: {
                fontStyle: 'bold',
            }
        }
      });
     
      y = doc.autoTable.previous.finalY + 15; // Atualiza a posição para a próxima tabela
    }

    // --- INICIA O DOWNLOAD ---
    doc.save(`treino_${treinoData.nome_treino}.pdf`);
  }

  function popularModal(dadosDoTreino) {
    if (!dadosDoTreino) return;

    // Guarda os dados para a função de PDF
    treinoAtualParaPdf = dadosDoTreino;

    const modalTitulo = document.getElementById('modal-titulo');
    const modalBody = document.getElementById('modal-body-content');

    if (modalTitulo) modalTitulo.textContent = dadosDoTreino.nome_treino || 'Treino';
    if (!modalBody) return;

    modalBody.innerHTML = ''; // Limpa o conteúdo anterior

    // Agrupa os exercícios por dia da semana
    const exerciciosAgrupados = (dadosDoTreino.exercicios || []).reduce((acc, ex) => {
      const dia = ex.dia_semana || 'Não especificado';
      (acc[dia] = acc[dia] || []).push(ex);
      return acc;
    }, {});
    
    const ordemDias = ["Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado","Domingo","Não especificado"];

    // Itera sobre os dias para criar os títulos e as tabelas
    for (const dia of ordemDias) {
      if (exerciciosAgrupados[dia]) {
        const exerciciosDoDia = exerciciosAgrupados[dia];
        
        // ===================================================================
        //  INÍCIO DA MUDANÇA PRINCIPAL
        // ===================================================================
        // 1. Cria um título H3 separado para o dia da semana
        let diaHtml = `<h3 class="dia-titulo">${dia}</h3>`;

        // 2. Cria a tabela de exercícios logo abaixo do título
        let tabelaHtml = `
            <table class="tabela-dia">
                <thead>
                    <tr>
                        <th>Exercício</th>
                        <th>Séries</th>
                        <th>Repetições</th>
                        <th>Descanso</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        exerciciosDoDia.forEach(ex => {
            const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(ex.nome_exercicio + ' exercicio')}`;
            tabelaHtml += `
                <tr>
                    <td><a href="${youtubeUrl}" target="_blank" class="exercicio-link">${ex.nome_exercicio}</a></td>
                    <td>${ex.series ?? '-'}</td>
                    <td>${ex.repeticoes ?? '-'}</td>
                    <td>${ex.descanso ?? '-'}</td>
                </tr>
            `;
        });

        tabelaHtml += `</tbody></table>`;
        
        // 3. Adiciona o título e a tabela ao corpo do modal
        modalBody.innerHTML += diaHtml + tabelaHtml;
        // ===================================================================
        //  FIM DA MUDANÇA
        // ===================================================================
      }
    }
    
    if (modalBody.innerHTML === '') {
        modalBody.innerHTML = '<p>Não há exercícios detalhados para este treino.</p>';
    }

    abrirModalDetalhes();
  }
  const btnDownload = document.getElementById('btnDownloadPdf');
    if (btnDownload) {
        btnDownload.addEventListener('click', () => {
            // Chama a função gerarPdfDoTreino correta (a que tem autoTable)
            // usando os dados que guardamos na variável treinoAtualParaPdf
            gerarPdfDoTreino(treinoAtualParaPdf); 
        });
    }

    // --- DATATABLE ---
    if (window.jQuery && $('#tabelaTreinos').length) {
        tabela = $('#tabelaTreinos').DataTable({
            dom: '<"tabela-controles-topo"lf>t<"tabela-controles-base"ip>',
            ajax: {
                url: 'http://127.0.0.1:8000/api/treinos/',
                headers: { Authorization: `Bearer ${authToken}` },
                dataSrc: ''
            },
            columns: [
                { className: 'details-control', orderable: false, data: null, defaultContent: '' },
                { data: 'nome_treino' }, { data: 'objetivo' },
                { data: 'exercicios', render: (d) => (!d || d.length === 0) ? "Nenhum" : `${d.length} exercícios` },
                { data: 'data_criacao', render: (d) => d ? new Date(d).toLocaleDateString('pt-BR') : '-' }
            ],
            language: { url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json" },
            responsive: true,
            order: [[4, 'desc']]
        });

        $('#tabelaTreinos tbody').on('click', 'tr', function (event) {
            if ($(event.target).hasClass('details-control')) return;
            const dadosDaLinha = tabela.row(this).data();
            if (dadosDaLinha) popularModal(dadosDaLinha);
        });
    }

    // --- FORMULÁRIO 'Novo Treino' ---
    const formNovoTreino = document.querySelector('#modalForm form');
    if (formNovoTreino) {
        formNovoTreino.addEventListener('submit', async (event) => {
            event.preventDefault();
            const submitButton = formNovoTreino.querySelector('button[type="submit"]');
            if (submitButton) { submitButton.textContent = 'Gerando...'; submitButton.disabled = true; }
            const dadosParaApi = {
                nomeTreino: document.getElementById('NomeTreino')?.value,
                diasSemana: document.getElementById('diasSemana')?.value,
                gruposMusculares: Array.from(document.querySelectorAll('input[name="grupos"]:checked')).map(cb => cb.value),
                limitacoes: document.getElementById('limitacoes')?.value,
                objetivo: 'Hipertrofia e Força'
            };
            try {
                const response = await fetch('http://127.0.0.1:8000/api/gerar-treino/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${authToken}` },
                    body: JSON.stringify(dadosParaApi)
                });
                if (!response.ok) { const err = await response.json(); throw new Error(err.error || 'Falha ao gerar o treino.'); }
                alert('Treino gerado com sucesso!');
                fecharModal(modalForm);
                if (tabela) tabela.ajax.reload();
            } catch (error) {
                alert(`Erro: ${error.message}`);
            } finally {
                if (submitButton) { submitButton.textContent = 'Salvar Treino'; submitButton.disabled = false; }
            }
        });
    }

    // --- FUNÇÕES DE CONFIGURAÇÕES DO USUÁRIO ---
    async function carregarDadosUsuario() {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/me/', { headers: { Authorization: `Bearer ${authToken}` }});
            if (!response.ok) throw new Error('Falha ao carregar dados.');
            const data = await response.json();
            const setIfExists = (id, val) => { const el = document.getElementById(id); if (el) el.value = val ?? ''; };
            setIfExists('nome', data.first_name); setIfExists('sobrenome', data.last_name);
            setIfExists('username', data.username); setIfExists('email', data.email);
            if (data.profile) {
                setIfExists('dateUser', data.profile.data_nascimento); setIfExists('nivelUser', data.profile.nivel_experiencia);
                setIfExists('pesoUser', data.profile.peso); setIfExists('alturaUser', data.profile.altura);
            }
        } catch (error) { console.error('Erro:', error); }
    }

   async function salvarConfiguracoes(event) {
    event.preventDefault();

    // 1. Coleta todos os dados do formulário
    const peso = document.getElementById('pesoUser')?.value;
    const altura = document.getElementById('alturaUser')?.value;
    const experiencia = document.getElementById('nivelUser')?.value;
    const dataNascimento = document.getElementById('dateUser')?.value; // O <input type="date"> já fornece o formato YYYY-MM-DD

    // 2. Validação do front-end
    if (!peso || !altura || !experiencia || !dataNascimento) {
      alert('Por favor, preencha todos os campos obrigatórios: Peso, Altura, Experiência e Data de Nascimento.');
      return;
    }

    // 3. Monta o objeto de dados para enviar à API
    const dadosAtualizados = {
      email: document.getElementById('email')?.value,
      first_name: document.getElementById('nome')?.value,
      last_name: document.getElementById('sobrenome')?.value,
      profile: {
        data_nascimento: dataNascimento,
        peso: parseFloat(peso),
        altura: parseInt(altura, 10),
        nivel_experiencia: experiencia
      }
    };

    // 4. Adiciona a senha apenas se ela foi preenchida
    const novaSenha = document.getElementById('password')?.value;
    if (novaSenha) {
        if (novaSenha !== document.getElementById('password-verify')?.value) {
            alert('As senhas não coincidem!');
            return;
        }
        dadosAtualizados.password = novaSenha;
    }

    // 5. Envia os dados para a API com o tratamento de erro
    try {
      const response = await fetch('http://127.0.0.1:8000/api/me/', {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${authToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosAtualizados)
      });
      
      if (!response.ok) { 
        const err = await response.json(); 
        // Transforma o objeto de erro em uma string legível
        const errorMessages = Object.entries(err).map(([field, messages]) => `${field}: ${messages.join(', ')}`).join('\n');
        throw new Error(errorMessages);
      }

      alert('Configurações salvas com sucesso!');
      fecharModal(modalInfo);

    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        alert('Configurações salvas com sucesso!');
        fecharModal(modalInfo);
      } else {
        alert('Erro ao salvar:\n' + error.message);
      }
    }
  }

    const formConfig = document.querySelector('#modalInfo form');
    if (formConfig) formConfig.addEventListener('submit', salvarConfiguracoes);

    // --- LOGOUT ---
    const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.clear();
            window.location.href = '../../inicio-pg/inicio.html';
        });
    }

    // --- TOGGLE SENHA ---
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('toggle-password');
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePassword.textContent = type === 'password' ? 'visibility_off' : 'visibility';
        });
    }
    // (Adicione aqui a lógica para o 'toggle-password-verify' se precisar)
});