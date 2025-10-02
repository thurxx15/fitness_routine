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

function removerFixos() {
    const btnLogout = document.getElementById('btn-logout');
    const btnUser = document.getElementById('abrirInfo');
    [btnLogout, btnUser].forEach((btn) => {
        if (btn) {
            btn.style.display = (btn.style.display === 'none') ? 'block' : 'none';
        }
    });
}

// Lógica para o Modal de "Novo Treino"
const abrirForm = document.getElementById('abrirForm');
const modalForm = document.getElementById('modalForm');
const fecharForm = document.getElementById('fecharForm');
const cancelarForm = document.getElementById('cancelarForm');

function abrir_form() {
    modalForm.classList.add('aberta');
    document.body.style.overflow = 'hidden';
}

function fechar_form() {
    modalForm.classList.remove('aberta');
    document.body.style.overflow = '';
}

if(abrirForm) abrirForm.addEventListener('click', abrir_form);
if(cancelarForm) cancelarForm.addEventListener('click', fechar_form);
if(fecharForm) fecharForm.addEventListener('click', fechar_form);
if(modalForm) modalForm.addEventListener('click', (e) => { if (e.target === modalForm) fechar_form(); });

// Lógica para o Modal de "Configurações do Usuário"
const abrirInfo = document.getElementById('abrirInfo');
const modalInfo = document.getElementById('modalInfo');
const fecharInfo = document.getElementById('fecharInfo');
const cancelarInfo = document.getElementById('cancelarInfo');

function abrir_info() {
    modalInfo.classList.add('aberta');
    document.body.style.overflow = 'hidden';
}
function fechar_info() {
    modalInfo.classList.remove('aberta');
    document.body.style.overflow = '';
}
if(abrirInfo) abrirInfo.addEventListener('click', abrir_info);
if(cancelarInfo) cancelarInfo.addEventListener('click', fechar_info);
if(fecharInfo) fecharInfo.addEventListener('click', fechar_info);
if(modalInfo) modalInfo.addEventListener('click', (e) => { if (e.target === modalInfo) fechar_info(); });

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        fechar_form();
        fechar_info();
    }
});


// --- LÓGICA DO DATATABLE E GERAÇÃO DE TREINOS ---

// Executa o código apenas quando o DOM estiver completamente carregado
$(document).ready(function() {
    let tabela;

    /**
     * Formata os detalhes dos exercícios para serem exibidos na linha filha (child row).
     * @param {Array} exercicios - O array de objetos de exercício da API.
     * @returns {string} O HTML formatado para a linha de detalhes.
     */

    function formatarDetalhes(exercicios) {
        if (!exercicios || exercicios.length === 0) {
            return '<div class="details-container"><p>Este treino não possui exercícios detalhados.</p></div>';
        }

        let detailsHtml = '<div class="details-container"><h4>Detalhes dos Exercícios:</h4><ul>';
        exercicios.forEach(ex => {
            detailsHtml += `<li><strong>${ex.nome_exercicio}</strong> (${ex.grupo_muscular || 'N/A'}): ${ex.series} séries de ${ex.repeticoes} repetições, com ${ex.descanso} de descanso.</li>`;
        });
        detailsHtml += '</ul></div>';
        return detailsHtml;
    }

    // --- [NOVA SEÇÃO 1]: LÓGICA DO MODAL DE DETALHES DO TREINO ---


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

    tabela = $('#tabelaTreinos').DataTable({

        // =============================================================
        // A LINHA QUE FALTAVA ESTÁ AQUI:
        // Define a estrutura do HTML para que o CSS funcione.
        "dom": '<"tabela-controles-topo"lf>' +
               't' +
               '<"tabela-controles-base"ip>',
        // =============================================================

        "ajax": {
            "url": "http://127.0.0.1:8000/api/treinos/",
            "type": "GET",
            "headers": {
                // CORREÇÃO: A sintaxe correta usa `backticks` (`)
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
            },
            "dataSrc": "" // A API retorna um array JSON diretamente
        },
        "columns": [
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            { "data": "nome_treino" },
            { "data": "objetivo" },
            { 
                "data": "exercicios",
                "render": function(data) {
                    if (!data || data.length === 0) return "Nenhum exercício";
                    const nomes = data.map(ex => ex.nome_exercicio);
                    const preview = nomes.slice(0, 2).join(', ');
                    // CORREÇÃO: A sintaxe correta usa `backticks` (`)
                    return nomes.length > 2 ? `${preview}...` : preview;
                }
            },
            { 
                "data": "data_criacao",
                "render": function(data) {
                    return new Date(data).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });
                }
            },
            {
                "data": null, // Não está atrelada a um dado específico
                "orderable": false,
                "searchable": false,
                "render": function(data, type, row) {
                    // 'row' contém todos os dados da linha atual
                    // Criamos um botão com a classe 'btn-excluir' e um data-id com o ID do treino
                    return `<button class="btn-excluir" data-id="${row.id}">Excluir</button>`;
                }
            }
        ],
        "language": {
            "search": "Pesquisar:",
            // CORREÇÃO: Faltavam os underscores (_)
            "lengthMenu": "Mostrar _MENU_ entradas",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
            "infoEmpty": "Mostrando 0 a 0 de 0 entradas",
            "infoFiltered": "(filtrado de _MAX_ entradas no total)",
            "paginate": {
                "previous": "Anterior",
                "next": "Próximo"
            }
        },
        "responsive": true,
        "order": [[4, 'desc']]
    });

    // O seu código para expandir as linhas pode vir aqui
    $('#tabelaTreinos tbody').on('click', 'td.details-control', function () {
        const tr = $(this).closest('tr');
        const row = tabela.row(tr);

        if (row.child.isShown()) {
            // Se a linha já está aberta, fecha
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Se a linha está fechada, abre e exibe os detalhes formatados
            row.child(formatarDetalhes(row.data().exercicios)).show();
            tr.addClass('shown');
        }
    });


    // [MUDANÇA]: Adicionamos este novo listener para o clique NA LINHA INTEIRA
    $('#tabelaTreinos tbody').on('click', 'tr', function (event) {
        // Impede que o modal abra se o clique for no ícone '+'
        if ($(event.target).hasClass('details-control')) {
            return;
        }
        
        const dadosDaLinha = tabela.row(this).data();
        if (dadosDaLinha) {
            popularModal(dadosDaLinha);
        }
    });

    // (Seu código original para o ícone '+' permanece, sem alterações)
    function formatarDetalhes(exercicios) { /* ... seu código ... */ }
    $('#tabelaTreinos tbody').on('click', 'td.details-control', function () {
        const tr = $(this).closest('tr');
        const row = tabela.row(tr);
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
        } else {
            row.child(formatarDetalhes(row.data().exercicios)).show();
            tr.addClass('shown');
        }
    });

    const formNovoTreino = document.getElementById('formPreferencias');

    if (formNovoTreino) {
        formNovoTreino.addEventListener('submit', async function(event) {
            // A linha abaixo é importante e já estava no seu código:
            tabela.ajax.reload(null, false);
        });
    }

    // --- [NOVA SEÇÃO 2]: LÓGICA DO DOWNLOAD EM PDF ---
    if(btnDownload) {
        btnDownload.addEventListener('click', () => {
            const { jsPDF } = window.jspdf;
            const conteudoParaPdf = document.getElementById('modal-body-content');
            const nomeArquivo = `${modalTitulo.textContent.trim().replace(/\s+/g, '_')}.pdf`;

            html2canvas(conteudoParaPdf, { 
                scale: 2, 
                backgroundColor: '#1e1e1e',
                useCORS: true // Ajuda a carregar imagens se houver
            }).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save(nomeArquivo);
            });
        });
    }

    $('#tabelaTreinos tbody').on('click', 'button.btn-excluir', async function () {
    const tr = $(this).closest('tr');
    const row = tabela.row(tr);
    const dadosDaLinha = row.data();

    // 1. Pede confirmação ao usuário (MUITO IMPORTANTE!)
    if (confirm(`Você tem certeza que deseja excluir o treino "${dadosDaLinha.nome_treino}"? Esta ação não pode ser desfeita.`)) {
        
        const treinoId = dadosDaLinha.id; // Pega o ID do treino dos dados da linha
        const token = localStorage.getItem('accessToken');

        try {
            // 1. Faz a chamada DELETE para a API
            const response = await fetch(`http://127.0.0.1:8000/api/treinos/${treinoId}/`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            // 2. Processa a resposta
            
            // Se a resposta for OK (incluindo 204 No Content), entra neste bloco
            if (response.ok) {
                alert('Treino excluído com sucesso!');
                row.remove().draw(false);

            // Se a resposta for um erro (4xx ou 5xx)
            } else {
                let errorMessage = `Falha ao excluir o treino. Status: ${response.status}`;
                
                // Tenta ler a resposta como JSON APENAS se houver conteúdo
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    const errorData = await response.json();
                    // Usa a mensagem de erro detalhada da API, se existir
                    errorMessage = errorData.detail || JSON.stringify(errorData);
                } else {
                    // Se não for JSON (ex: uma página de erro HTML), usa o texto do status
                    errorMessage = response.statusText;
                }
                
                // Lança o erro para ser pego pelo catch block
                throw new Error(errorMessage);
            }

        } catch (error) {
            console.error('Erro ao excluir treino:', error);
            // A notificação agora mostrará uma mensagem de erro muito mais útil
            alert(`Erro: ${error.message}`);
        }
    }
}); // Fim do $(document).ready()

// --- OUTRAS FUNÇÕES (Configurações do Usuário, Logout, etc.) ---

// (Todo o resto do seu código, como carregarDadosUsuario, salvarConfiguracoes, a lógica de logout, etc., permanece aqui sem alterações)
async function carregarDadosUsuario() { /* ... seu código ... */ }
async function salvarConfiguracoes(event) { /* ... seu código ... */ }
// ... (seus event listeners para configurações e logout) ...

});

    // Event listener para a submissão do formulário de "Novo Treino"
    const formNovoTreino = document.getElementById('formPreferencias');
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
        console.error('Erro ao salvar:', error);
        alert(error.message);
    }
    }

// Carrega os dados quando o modal é aberto
abrirInfo.addEventListener('click', carregarDadosUsuario);

// Salva os dados quando o formulário é enviado
const formConfiguracoes = document.getElementById('formConfiguracoes');
formConfiguracoes.addEventListener('submit', salvarConfiguracoes);
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

window.onload = function() {
    carregarDadosUsuario()
}

const passwordInput = document.getElementById('password');
const passwordVerifyInput = document.getElementById('password-verify');
const togglePassword = document.getElementById('toggle-password');
const togglePasswordVerify = document.getElementById('toggle-password-verify');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? 'visibility_off' : 'visibility';
    });

    togglePasswordVerify.addEventListener('click', function () {
    const type = passwordVerifyInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordVerifyInput.setAttribute('type', type);
    togglePasswordVerify.textContent = type === 'password' ? 'visibility_off' : 'visibility';
    });

btn.addEventListener('click', function() {

    if (passwordInput.value !== passwordVerifyInput.value) {
        alert('As senhas não coincidem, verifique novamente.');
        return; } });
