function alternarBarra() {
  const barra = document.getElementById('barraLateral');
  const conteudo = document.getElementById('mainContent');

  barra.classList.toggle('oculta');
  conteudo.classList.toggle('expandida'); }

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


const nomeUsuario = localStorage.getItem("usuario");

    if (nomeUsuario) {
        document.getElementById("boas-vindas").textContent = `Olá ${nomeUsuario}, Bem-vindo ao Fitness Routine.`;
    } else {
        // Caso entre direto na página sem login, redireciona pro login
        window.location.href = "../../login-pg/login.html";
    }

const abrirModalBtn = document.getElementById('btn-user');
const modalOverlay = document.getElementById('modalOverlay');
const fecharModalBtn = document.getElementById('fecharModal');
const cancelarModalBtn = document.getElementById('cancelarModal');

function abrirModal() {
  modalOverlay.classList.add('aberta');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  modalOverlay.classList.remove('aberta');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

abrirModalBtn.addEventListener('click', abrirModal);
fecharModalBtn.addEventListener('click', fecharModal);
cancelarModalBtn.addEventListener('click', fecharModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) fecharModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fecharModal();
});
