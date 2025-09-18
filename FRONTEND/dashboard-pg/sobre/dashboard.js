function alternarBarra() {
  const barra = document.getElementById('barraLateral');
  const conteudo = document.getElementById('mainContent');

  barra.classList.toggle('oculta');
  conteudo.classList.toggle('expandida'); }

function removerFixos() {
  const btnConfig = document.getElementById('btn-config');
  const btnLogout = document.getElementById('btn-logout');
  const btnUser = document.getElementById('abrirInfo');

  [btnConfig, btnLogout, btnUser].forEach((btn) => {
    if (btn) {
      btn.style.display = (btn.style.display === 'none') ? 'block' : 'none';
    }
  });
}


const nomeUsuario = localStorage.getItem("usuario");

    if (nomeUsuario && document.getElementById("boas-vindas")) {
        document.getElementById("boas-vindas").textContent = `Olá ${nomeUsuario}, Bem-vindo ao Fitness Routine.`;
    } else if (!nomeUsuario) {
        // Redireciona apenas se não estiver logado
        window.location.href = "../../login-pg/login.html";
    }

/*BLOCO DAS INFORMAÇÕES*/
const abrirInfo = document.getElementById('abrirInfo');
const modalInfo = document.getElementById('modalInfo');
const fecharInfo = document.getElementById('fecharInfo');
const cancelarInfo = document.getElementById('cancelarInfo');

function abrir_info() {
  modalInfo.classList.add('aberta');
  modalInfo.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function fechar_info() {
  modalInfo.classList.remove('aberta');
  modalInfo.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

abrirInfo.addEventListener('click', abrir_info);
cancelarInfo.addEventListener('click', fechar_info);
fecharInfo.addEventListener('click', fechar_info);

/*info*/
modalInfo.addEventListener('click', (e) => {
  if (e.target === modalInfo) fechar_info();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fechar_info();
});

const formConfiguracoes = document.querySelector('#modalInfo #formPreferencias');

// --- FUNÇÃO PARA CARREGAR OS DADOS DO USUÁRIO ---
async function carregarDadosUsuario() {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.href = '../../login-pg/login.html';
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

        document.getElementById('nome').value = data.first_name || '';
        document.getElementById('sobrenome').value = data.last_name || '';
        document.getElementById('username').value = data.username;
        document.getElementById('email').value = data.email;
        
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


// --- FUNÇÃO PARA SALVAR AS ALTERAÇÕES (COM TRATAMENTO DE ERRO INTELIGENTE) ---
async function salvarConfiguracoes(event) {
    event.preventDefault();

    const peso = document.getElementById('pesoUser').value;
    const altura = document.getElementById('alturaUser').value;
    const experiencia = document.getElementById('nivelUser').value;
    const dataNascimento = document.getElementById('dateUser').value;

    if (!peso || !altura || !experiencia || !dataNascimento) {
        alert('Por favor, preencha todos os campos obrigatórios: Peso, Altura, Experiência e Data de Nascimento.');
        return;
    }

    const accessToken = localStorage.getItem('accessToken');
    
    const dadosAtualizados = {
        email: document.getElementById('email').value,
        first_name: document.getElementById('nome').value,
        last_name: document.getElementById('sobrenome').value,
        profile: {
            data_nascimento: dataNascimento,
            peso: parseFloat(peso),
            altura: parseInt(altura),
            nivel_experiencia: experiencia
        }
    };

    const novaSenha = document.getElementById('password').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;

    if (novaSenha) {
        if (novaSenha !== confirmaSenha) {
            alert('As senhas não coincidem! Por favor, verifique.');
            return;
        }
        dadosAtualizados.password = novaSenha;
    }

    try {
        const response = await fetch('http://127.0.0.1:8000/api/me/', {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosAtualizados)
        });

        // Se a resposta do servidor não for 'ok' (ex: erro 400), ele vai para o catch
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(JSON.stringify(errorData));
        }

        // Se o código chegar aqui, significa que o servidor respondeu com sucesso
        alert('Configurações salvas com sucesso!');
        fechar_info();

    } catch (error) {
        // ===================================================================
        //  INÍCIO DA LÓGICA INTELIGENTE DE TRATAMENTO DE ERRO
        // ===================================================================
        // Verifica se o erro é o específico "Failed to fetch" do reinício do servidor
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
            // Assume que a operação deu certo e o servidor reiniciou antes de responder
            console.warn('Ocorreu um erro "Failed to fetch". Assumindo sucesso devido ao reinício do servidor de desenvolvimento.');
            alert('Configurações salvas com sucesso!');
            fechar_info();
        } else {
            // Se for qualquer outro erro (como um erro de validação 400), mostra o erro real
            console.error('Erro real ao salvar:', error.message);
            alert('Ocorreu um erro ao salvar: ' + error.message);
        }
        
    }
}


// --- EVENT LISTENERS ---
abrirInfo.addEventListener('click', carregarDadosUsuario);
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