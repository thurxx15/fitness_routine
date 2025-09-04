/*BLOCO DA BARRA*/
function alternarBarra() {
  const barra = document.getElementById('barraLateral');
  const conteudo = document.getElementById('mainContent');

  barra.classList.toggle('oculta');
  conteudo.classList.toggle('expandida'); 
}
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

/*BLOCO DO FORMULÁRIO*/
const abrirForm = document.getElementById('abrirForm');
const modalForm = document.getElementById('modalForm');
const fecharForm = document.getElementById('fecharForm');
const cancelarForm = document.getElementById('cancelarForm');

function abrir_form() {
  modalForm.classList.add('aberta');
  modalForm.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function fechar_form() {
  modalForm.classList.remove('aberta');
  modalForm.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

abrirForm.addEventListener('click', abrir_form);
cancelarForm.addEventListener('click', fechar_form);
fecharForm.addEventListener('click', fechar_form);

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

/*FECHAR MODAL CLICANDO FORA*/
/*form*/
modalForm.addEventListener('click', (e) => {
  if (e.target === modalForm) fechar_form();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fechar_form();
});

/*info*/
modalInfo.addEventListener('click', (e) => {
  if (e.target === modalInfo) fechar_info();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fechar_info();
});

/*TEMPO*/
function atualizarTempo(valor) {
  let horas = Math.floor(valor / 60);
  let minutos = valor % 60;
  document.getElementById("saida").textContent = `${horas}h ${minutos.toString().padStart(2, '0')}min`;
}

/*ERRO*/
document.getElementById("formPreferencias").addEventListener("submit", function(minimo_limitacoes) {
  const selecionados = document.querySelectorAll('input[name="grupos"]:checked');
  const erroMsg = document.getElementById("erro-limitacoes");

  if (selecionados.length < 3) {
    minimo_limitacoes.preventDefault();
    erroMsg.style.display = "inline-block";
    erroMsg.textContent = "Selecione pelo menos 3 grupos musculares."; } 
  
  else {
    erroMsg.style.display = "none"; }
});
document.getElementById("formPreferencias").addEventListener("submit", function(minimo_d_s) {
  const dias = document.getElementById("diasSemana").value;
  const erroMsg = document.getElementById("erro-d_s");

  if (dias < 1 || dias > 7) {
    minimo_d_s.preventDefault();
    erroMsg.style.display = "inline-block";
    erroMsg.textContent = "Insira uma quantidade de dias válidos."; } 
  
  else {
    erroMsg.style.display = "none";
  }
});