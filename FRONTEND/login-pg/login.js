const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    this.textContent = type === 'password' ? 'visibility_off' : 'visibility';

});

const URL = "http://127.0.0.1:8000/api/token/";



async function login(username, password) {
    try {
        const resposta = await fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify({username, password})
        })
    
        if (!resposta.ok) {
            const erro = await resposta.json()
            console.log('ERRO NO LOGIN', erro);
            return {sucesso: false, erro: erro.detail}
        }
        
        console.log('Login realizado com sucesso');
        const data = await resposta.json()

        localStorage.setItem('accessToken', data.access)
        localStorage.setItem('refreshToken', data.refresh)

        return {sucesso: true}
    
    
    
    }    catch (error) {
        console.log('Erro ao fazer login', error);
        return {sucesso: false, erro: error}
    }
}

const formLogin = document.getElementById('btnAcao')

formLogin.addEventListener('click', async(event) => {
    event.preventDefault();

    const inputUsername = document.getElementById('user');
    const inputPassword = document.getElementById('password');
    const mensagemErro = document.getElementById('mensagem-erro');

    const username = inputUsername.value;
    const password = inputPassword.value;

    const resultadoLogin = await login(username, password)

    console.log('resultadoLogin', resultadoLogin)

    if (resultadoLogin.sucesso) {
        window.location.href = '../dashboard-pg/inicio/dashboard.html'; 
        localStorage.setItem('usuario', username);} 
    else {
        mensagemErro.textContent = resultadoLogin.mensagem; }
    
})