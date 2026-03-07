//constantes
const btn = document.getElementById('btn');
const passwordInput = document.getElementById('password');
const passwordVerifyInput = document.getElementById('password-verify');
const togglePassword = document.getElementById('toggle-password');
const togglePasswordVerify = document.getElementById('toggle-password-verify');

// Função para alternar a visibilidade da senha
togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? 'visibility_off' : 'visibility';
    });

// Função para alternar a visibilidade da senha de verificação
togglePasswordVerify.addEventListener('click', function () {
    const type = passwordVerifyInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordVerifyInput.setAttribute('type', type);
    togglePasswordVerify.textContent = type === 'password' ? 'visibility_off' : 'visibility';
    });

// Função para validar se as senhas coincidem
btn.addEventListener('click', function() {

    if (passwordInput.value !== passwordVerifyInput.value) {
        alert('As senhas não coincidem, verifique novamente.');
        return; }
   
    const formData = new FormData();

    formData.append('username', document.getElementById('user').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('password', document.getElementById('password').value);
    formData.append('first_name', document.getElementById('first_name').value);
    formData.append('last_name', document.getElementById('last_name').value);

    const URL = 'https://fitness-routine-5j1h.onrender.com/api/register/';

    fetch(URL, {
        method: 'POST',
        body: formData
    })
    
    .then(response => {
        if(!response.ok) throw new Error('Erro ao cadastrar usuário.')
        window.location.href = '../login-pg/login.html';
        alert('Usuario cadastrado com sucesso !')
        return response.json();
        
    })
    .catch(error => alert(error.message)); 

})
