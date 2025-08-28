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


const abrirModalBtn = document.getElementById('abrirModal');
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

function atualizarTempo(valor) {
  let horas = Math.floor(valor / 60);
  let minutos = valor % 60;
  document.getElementById("saida").textContent = `${horas}h ${minutos.toString().padStart(2, '0')}min`;
}


document.getElementById("formPreferencias").addEventListener("submit", function(minimo) {
  const selecionados = document.querySelectorAll('input[name="grupos"]:checked');
  const erroMsg = document.getElementById("erro-grupos");

  if (selecionados.length < 3) {
    minimo.preventDefault();
    erroMsg.style.display = "inline-block";
    erroMsg.textContent = "Selecione pelo menos 3 grupos musculares.";
  } else {
    erroMsg.style.display = "none";
  }
});
