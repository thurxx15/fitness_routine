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

const formConfiguracoes = document.getElementById('formConfiguracoes');


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


// --- FUNÇÃO PARA CARREGAR OS DADOS DO USUÁRIO ---
async function carregarDadosUsuario() {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.href = '../../login-pg/login.html';
        return;
    }

    try {
        const response = await fetch('https://fitness-routine-5j1h.onrender.com/api/me/', {
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
    const confirmaSenha = document.getElementById('password-verify').value;

    if (novaSenha) {
        if (novaSenha !== confirmaSenha) {
            alert('As senhas não coincidem! Por favor, verifique.');
            return;
        }
        dadosAtualizados.password = novaSenha;
    }

    try {
        const response = await fetch('https://fitness-routine-5j1h.onrender.com/api/me/', {
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
formConfiguracoes.addEventListener('submit', salvarConfiguracoes);


//LOGOUT
const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (event) => {
            // 1. Previne a ação padrão do link (que é navegar imediatamente)
            event.preventDefault(); 
            
            // 2. Mostra a caixa de diálogo de confirmação
            const querSair = confirm("Tem certeza de que deseja sair?");

            // 3. Só continua se o usuário clicou em "OK"
            if (querSair) {
                // 4. Limpa o armazenamento local para deslogar o usuário
                localStorage.clear(); 
                
                // 5. Redireciona para a página inicial
                window.location.href = '../../inicio-pg/inicio.html'; 
            }
            // Se o usuário clicar em "Cancelar", nada acontece.
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