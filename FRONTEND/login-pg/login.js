// =====================================================================
//      ARQUIVO LOGIN.JS COMPLETO - COM RECUPERAÇÃO DE SENHA
// =====================================================================

// =======================================================
//          PARTE 1: LÓGICA DE LOGIN (EXISTENTE)
// =======================================================

const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');
const btnAcao = document.getElementById('btnAcao');
const userInput = document.getElementById('user');

// Função que faz a chamada para a API de login
async function fazerLogin(username, password) {
    const URL = "https://fitness-routine-5j1h.onrender.com";
    try {
        const resposta = await fetch(URL, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (!resposta.ok) {
            const erro = await resposta.json();
            console.log('ERRO NO LOGIN', erro);
            alert('Usuário ou senha inválidos');
            return { sucesso: false, erro: erro.detail };
        }

        const data = await resposta.json();
        localStorage.setItem('accessToken', data.access);
        localStorage.setItem('refreshToken', data.refresh);
        return { sucesso: true };

    } catch (error) {
        console.log('Erro ao fazer login', error);
        return { sucesso: false, erro: error };
    }
}

// Listener para o clique no botão de entrar
btnAcao.addEventListener('click', async (event) => {
    event.preventDefault();

    const username = userInput.value;
    const password = passwordInput.value;

    if (!username || !password) {
        alert('Por favor, preencha o usuário e a senha.');
        return;
    }

    const resultadoLogin = await fazerLogin(username, password);

    if (resultadoLogin.sucesso) {
        localStorage.setItem('usuario', username);
        window.location.href = '../dashboard-pg/inicio/dashboard.html';
    }
});

// Listener para o clique no ícone de visibilidade da senha
togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? 'visibility' : 'visibility_off'; // Corrigido para alternar corretamente
});

// Listener para a tecla Enter nos campos de input
[userInput, passwordInput].forEach(input => {
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            btnAcao.click();
        }
    });
});


// =====================================================================
//      PARTE 2: LÓGICA DE RECUPERAÇÃO DE SENHA (NOVA)
// =====================================================================

// Seleciona os elementos do pop-up
const popup = document.getElementById('popup-recuperar');
const btnEnviarRecuperacao = document.getElementById('btn-enviar-recuperacao');
const emailRecuperacaoInput = document.getElementById('email-recuperacao');

// Funções para abrir e fechar o pop-up (chamadas pelo HTML via onclick)
function abrirPopup() {
    popup.style.display = 'flex';
}

function fecharPopup() {
    popup.style.display = 'none';
}

// Função para gerar uma senha temporária aleatória
function gerarSenhaTemporaria(tamanho = 8) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return senha;
}

// Listener para o clique no botão de enviar do pop-up
btnEnviarRecuperacao.addEventListener('click', async () => {
    const email = emailRecuperacaoInput.value;

    if (!email) {
        alert('Por favor, insira seu e-mail.');
        return;
    }

    const novaSenha = gerarSenhaTemporaria();
    
    // **IMPORTANTE: Configure suas chaves do EmailJS aqui**
    const EMAILJS_SERVICE_ID = "service_d8amsdb"; // Cole seu Service ID aqui
    const EMAILJS_TEMPLATE_ID = "template_ydrw0tj"; // Cole seu Template ID aqui
    const EMAILJS_PUBLIC_KEY = "mqjIR5uAKN5DB9Rie";   // Cole sua Public Key (User ID) aqui

    // Parâmetros que serão enviados para o seu template no EmailJS
    const templateParams = {
        to_email: email,
        to_name: email.split('@')[0], // Pega o nome do usuário antes do @
        nova_senha: novaSenha
    };

    // Altera o texto do botão para dar feedback ao usuário
    btnEnviarRecuperacao.textContent = 'Enviando...';
    btnEnviarRecuperacao.disabled = true;

    // Lembre-se que esta lógica apenas envia o e-mail.
    // Você precisa ter uma lógica no seu BACK-END para realmente
    // ATUALIZAR a senha do usuário no banco de dados para esta 'novaSenha'.
    // A implementação abaixo apenas notifica o usuário via e-mail.

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
        .then((response) => {
            console.log('SUCESSO!', response.status, response.text);
            alert('Um e-mail com sua nova senha temporária foi enviado com sucesso!');
            fecharPopup(); // Fecha o pop-up após o sucesso
        })
        .catch((err) => {
            console.error('ERRO AO ENVIAR E-MAIL:', err);
            alert('Ocorreu um erro ao tentar enviar o e-mail. Por favor, tente novamente.');
        })
        .finally(() => {
            // Restaura o botão ao estado original
            btnEnviarRecuperacao.textContent = 'Enviar';
            btnEnviarRecuperacao.disabled = false;
        });
});

// Fecha o pop-up se o usuário clicar fora da área de conteúdo
window.addEventListener('click', (event) => {
    if (event.target == popup) {
        fecharPopup();
    }
});