function alternarBarra() {
    const barra = document.getElementById('barraLateral');
    const conteudo = document.getElementById('mainContent');

    barra.classList.toggle('oculta');
    conteudo.classList.toggle('expandida'); 
}

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

// Data for the dynamic card
const cardData = [
    {
        title: "Sua genética influencia seus resultados",
        text: "Nem todos ganham massa da mesma forma — e tá tudo bem.",
        link: "../curiosidades/dashboard.html"
    },
    {
        title: "Musculação fortalece corpo e mente",
        text: "Mais do que físico, o treino transforma a forma como você se vê.",
        link: "../curiosidades/dashboard.html"
    },
    {
        title: "Músculos fortes = menos lesões",
        text: "A musculação é um escudo contra lesões e dores.",
        link: "../curiosidades/dashboard.html"
    },
    {
        title: "Treinar pode prolongar sua vida",
        text: "Musculação é qualidade de vida agora — e na velhice.",
        link: "../curiosidades/dashboard.html"
    },
    {
        title: "O sedentarismo é o maior inimigo da sua saúde",
        text: "Ficar parado cobra um preço alto — e mais cedo do que se pensa.",
        link: "../curiosidades/dashboard.html"
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

// Function to update the card content
function updateCard(newIndex) {
    const currentData = cardData[newIndex];
    cardTitle.textContent = currentData.title;
    cardText.textContent = currentData.text;
    cardLink.href = currentData.link;
    cardLink.textContent = "Ver mais";
}

// Initial update to show the content of the first slide on page load
updateCard(index);