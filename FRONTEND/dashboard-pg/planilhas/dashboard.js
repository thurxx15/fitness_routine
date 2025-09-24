function alternarBarra() {
    const barra = document.getElementById('barraLateral');
    const conteudo = document.getElementById('mainContent');
    barra.classList.toggle('oculta');
    conteudo.classList.toggle('expandida');
}

function atualizarTempo(valor) {
  let horas = Math.floor(valor / 60);
  let minutos = valor % 60;
  // Encontra o elemento 'saida' e atualiza seu texto
  const saidaElemento = document.getElementById("saida");
  if (saidaElemento) {
    saidaElemento.textContent = `${horas}h ${minutos.toString().padStart(2, '0')}min`;
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

    // Armazena a instância da API do DataTable para manipulação futura (ex: reload)
    const tabela = $('#tabelaTreinos').DataTable({
        "ajax": {
            "url": "http://127.0.0.1:8000/api/treinos/",
            "type": "GET",
            "headers": {
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
            },
            "dataSrc": "" // A API retorna um array JSON diretamente
        },
        "columns": [
            {
                "className": 'details-control', // Classe para o controle de expansão
                "orderable": false,
                "data": null,
                "defaultContent": '' // O ícone '+' é adicionado via CSS
            },
            { "data": "nome_treino" },
            { "data": "objetivo" },
            { 
                "data": "exercicios",
                "render": function(data) { // Renderiza um resumo dos exercícios
                    if (!data || data.length === 0) return "Nenhum exercício";
                    const nomes = data.map(ex => ex.nome_exercicio);
                    const preview = nomes.slice(0, 2).join(', ');
                    return nomes.length > 2 ? `${preview}...` : preview;
                }
            },
            { 
                "data": "data_criacao",
                "render": function(data) { // Formata a data para um formato legível
                    return new Date(data).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });
                }
            }
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json"
        },
        "responsive": true,
        "order": [[4, 'desc']] // Ordena pela 5ª coluna (data de criação), do mais novo para o mais antigo
    });

    // Event listener para o clique no controle de expansão (+)
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

    // Event listener para a submissão do formulário de "Novo Treino"
    const formNovoTreino = document.getElementById('formPreferencias');
    if (formNovoTreino) {
        formNovoTreino.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            const submitButton = formNovoTreino.querySelector('button[type="submit"]');
            submitButton.textContent = 'Gerando com IA...';
            submitButton.disabled = true;

            const nomeTreino = document.getElementById('NomeTreino').value;
            const diasSemana = document.getElementById('diasSemana').value;
            const gruposMusculares = Array.from(document.querySelectorAll('input[name="grupos"]:checked')).map(cb => cb.value);
            const limitacoes = document.getElementById('limitacoes').value;
            const objetivo = "Hipertrofia e Força"; // Valor de exemplo, pode ser pego de um campo <select> no modal

            const dadosParaApi = { nomeTreino, diasSemana, gruposMusculares, limitacoes, objetivo };

            try {
                const response = await fetch('http://127.0.0.1:8000/api/gerar-treino/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(dadosParaApi)
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Falha ao gerar o treino. Verifique os dados e tente novamente.');
                }

                alert('Treino gerado e salvo com sucesso!');
                fechar_form();
                
                // Recarrega os dados do DataTable a partir da fonte AJAX para exibir o novo treino
                tabela.ajax.reload(null, false); // `null, false` evita resetar a paginação

            } catch (error) {
                alert(`Erro: ${error.message}`);
            } finally {
                // Restaura o botão em caso de sucesso ou falha
                submitButton.textContent = 'Salvar Treino';
                submitButton.disabled = false;
            }
        });
    }
});

// --- FUNÇÃO PARA CARREGAR OS DADOS DO USUÁRIO ---
async function carregarDadosUsuario() {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.href = '../../login-pg/login.html'; // Redireciona se não estiver logado
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:8000/api/me/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Falha ao carregar dados do usuário.');
        }

        const data = await response.json();

        // Preenche os campos do formulário com os dados da API
        document.getElementById('nome').value = data.first_name || '';
        document.getElementById('sobrenome').value = data.last_name || '';
        document.getElementById('username').value = data.username;
        document.getElementById('email').value = data.email;
        
        // Desabilita campos não editáveis
        document.getElementById('nome').readOnly = true;
        document.getElementById('sobrenome').readOnly = true;
        document.getElementById('username').readOnly = true;

        if (data.profile) {
            document.getElementById('dateUser').value = data.profile.data_nascimento || '';
            document.getElementById('nivelUser').value = data.profile.nivel_experiencia || '';
            document.getElementById('pesoUser').value = data.profile.peso || '';
            document.getElementById('alturaUser').value = data.profile.altura || '';
        }

    } catch (error) {
        console.error('Erro:', error);
        alert(error.message);
    }
}


// --- FUNÇÃO PARA SALVAR AS ALTERAÇÕES ---
async function salvarConfiguracoes(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Validação de campos obrigatórios no front-end
    const peso = document.getElementById('pesoUser').value;
    const altura = document.getElementById('alturaUser').value;
    const experiencia = document.getElementById('nivelUser').value;
    console.log(experiencia);
    const dataNascimento = document.getElementById('dateUser').value;

    if (!peso || !altura || !experiencia || !dataNascimento) {
        alert('Por favor, preencha todos os campos obrigatórios: Peso, Altura, Experiência e Data de Nascimento.');
        return;
    }

    const accessToken = localStorage.getItem('accessToken');
    const dadosAtualizados = {
        email: document.getElementById('email').value, // Permite edição do email
        profile: {
            data_nascimento: dataNascimento,
            peso: parseFloat(peso),
            altura: parseInt(altura),
            nivel_experiencia: experiencia
        }
    };

    try {
        const response = await fetch('http://127.0.0.1:8000/api/me/', {
            method: 'PATCH', // PATCH é ideal para atualizações parciais
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosAtualizados)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error('Falha ao salvar as configurações: ' + JSON.stringify(errorData));
        }

        alert('Configurações salvas com sucesso!');
        fechar_info(); // Fecha o modal após o sucesso

    } catch (error) {
        console.error('Erro ao salvar:', error);
        alert(error.message);
    }
}

// Carrega os dados quando o modal é aberto
abrirInfo.addEventListener('click', carregarDadosUsuario);

// Salva os dados quando o formulário é enviado
formConfiguracoes.addEventListener('submit', salvarConfiguracoes);


document.addEventListener('DOMContentLoaded', function() {
    
    const logoutButton = document.getElementById('btn-logout');

    // Verifica se o botão de logout existe na página
    if (logoutButton) {
        logoutButton.addEventListener('click', async function() {

            // 1. Pegar os tokens do localStorage
            const accessToken = localStorage.getItem('access_token');
            const refreshToken = localStorage.getItem('refresh_token');

            if (!refreshToken) {
                console.error('Refresh token não encontrado para fazer logout.');
                // Mesmo se não houver token, limpe tudo e redirecione
                localStorage.clear();
                window.location.href = '../../inicio-pg/inicio.html'; // Redireciona para a página de login
                return;
            }

            try {
                // 2. Chamar o endpoint de logout do backend
                const response = await fetch('http://127.0.0.1:8000/api/logout/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // O endpoint de logout também é protegido, então precisamos do access token
                        'Authorization': `Bearer ${accessToken}` 
                    },
                    body: JSON.stringify({
                        'refresh_token': refreshToken
                    })
                });

                if (response.ok) {
                    console.log('Logout realizado com sucesso no backend.');
                } else {
                    // Mesmo que o backend falhe, o logout no frontend deve continuar
                    console.error('Falha no logout do backend, mas prosseguindo com o logout local.');
                }

            } catch (error) {
                console.error('Erro de rede ao tentar fazer logout:', error);
            } finally {
                // 3. Limpar o localStorage e redirecionar (acontece sempre)
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                // localStorage.clear(); // Alternativa para limpar tudo

                // 4. Redirecionar o usuário para a página de login
                window.location.href = '../../inicio-pg/inicio.html';
            }
        });
    }
});

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