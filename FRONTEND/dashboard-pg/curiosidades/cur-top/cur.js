// Função para alternar a visibilidade da barra lateral
function alternarBarra() {
    const barra = document.getElementById('barraLateral');
    const conteudo = document.getElementById('mainContent');

    barra.classList.toggle('oculta');
    conteudo.classList.toggle('expandida'); 
}

// Função para alternar a visibilidade dos botões fixos
function removerFixos() {
    const btnConfig = document.getElementById('btn-config');
    const btnLogout = document.getElementById('btn-logout');
    const btnUser = document.getElementById('btn-user');

    [btnConfig, btnLogout, btnUser].forEach((btn) => {
        if (btn) {
            btn.style.display = (btn.style.display === 'none') ? 'block' : 'none';
        }
    });
}
