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

// Data for the dynamic card
const cardData = [
    {
        title: "Sua genética influencia seus resultados",
        text: "Nem todos ganham massa da mesma forma — e tá tudo bem.",
        link: "cur-top/cur1.html"
    },
    {
        title: "Musculação fortalece corpo e mente",
        text: "Mais do que físico, o treino transforma a forma como você se vê.",
        link: "cur-top/cur2.html"
    },
    {
        title: "Músculos fortes = menos lesões",
        text: "A musculação é um escudo contra lesões e dores.",
        link: "cur-top/cur3.html"
    },
    {
        title: "Treinar pode prolongar sua vida",
        text: "Musculação é qualidade de vida agora — e na velhice.",
        link: "cur-top/cur4.html"
    },
    {
        title: "O sedentarismo é o maior inimigo da sua saúde",
        text: "Ficar parado cobra um preço alto — e mais cedo do que se pensa.",
        link: "cur-top/cur5.html"
    }
];

// References to HTML elements
const items = document.querySelectorAll(".carousel-item");
let index = 0;
const carouselInner = document.querySelector(".carousel-inner");
const cardTitle = document.getElementById("card-title");
const cardText = document.getElementById("card-text");
const cardLink = document.getElementById("card-link");

// Event listeners for carousel buttons
document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % items.length;
    updateCarousel();
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
});

// Function to update the carousel and card
function updateCarousel() {
    carouselInner.style.transform = `translateX(${-index * 100}%)`;
    updateCard(index);
}

function updateCard(newIndex) {
    const currentData = cardData[newIndex];
    cardTitle.textContent = currentData.title;
    cardText.textContent = currentData.text;
    cardLink.href = currentData.link;
    cardLink.textContent = "Ver mais";
}

updateCard(index);

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