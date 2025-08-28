function alternarBarra() {
  const barra = document.getElementById('barraLateral');
  const conteudo = document.getElementById('mainContent');

  barra.classList.toggle('oculta');
  conteudo.classList.toggle('expandida'); }

function removerFixos() {
  const btnConfig = document.getElementById('btn-config');
  const btnLogout = document.getElementById('btn-logout');
  const btnUser = document.getElementById('btnModal2');

  [btnConfig, btnLogout, btnUser].forEach((btn) => {
    if (btn) {
      btn.style.display = (btn.style.display === 'none') ? 'block' : 'none';
    }
  });
}


const abrirModalBtn = document.getElementById('abrirModal');
const abrirModalBtn2 = document.getElementById('btnModal2');
const modalOverlay = document.getElementById('modalOverlay');
const modalOverlay2 = document.getElementById('modalOverlay2');
const fecharModalBtn = document.getElementById('fecharModal');
const fecharModalBtn2 = document.getElementById('fecharModal2');
const cancelarModalBtn = document.getElementById('cancelarModal');
const cancelarModalBtn2 = document.getElementById('cancelarModal2');

function abrirModal() {
  modalOverlay.classList.add('aberta');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function abrirModal2() {
  modalOverlay2.classList.add('aberta');
  modalOverlay2.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  modalOverlay.classList.remove('aberta');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function fecharModal2() {
  modalOverlay2.classList.remove('aberta');
  modalOverlay2.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

abrirModalBtn.addEventListener('click', abrirModal);
abrirModalBtn2.addEventListener('click', abrirModal2);
fecharModalBtn.addEventListener('click', fecharModal);
fecharModalBtn2.addEventListener('click', fecharModal2);
cancelarModalBtn.addEventListener('click', fecharModal);
cancelarModalBtn2.addEventListener('click', fecharModal2);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) fecharModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fecharModal();
});


const acessToken = localStorage.getItem('accessToken');

const payload = JSON.parse(atob(token.split('.')[1]));
document.getElementById('username').value = payload.nome;
