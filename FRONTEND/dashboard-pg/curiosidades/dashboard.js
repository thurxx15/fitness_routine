/*
================================================================================
|   ARQUIVO JAVASCRIPT - DASHBOARD DE CURIOSIDADES                             |
|   Responsável pelo carrossel, card dinâmico e modais.                        |
================================================================================
*/

// --- FUNÇÕES GLOBAIS (acessíveis pelo HTML) ---
function alternarBarra() {
    const barra = document.getElementById('barraLateral');
    const conteudo = document.getElementById('mainContent');
    if (barra) barra.classList.toggle('oculta');
    if (conteudo) conteudo.classList.toggle('expandida');
}

// --- CÓDIGO EXECUTADO QUANDO A PÁGINA ESTÁ CARREGADA ---
document.addEventListener('DOMContentLoaded', () => {

    // --- VERIFICAÇÃO INICIAL DE LOGIN ---
    if (!localStorage.getItem("accessToken") && !localStorage.getItem("access_token")) {
        window.location.href = "../../login-pg/login.html";
        return;
    }

    // --- LÓGICA DO MODAL DE "CONFIGURAÇÕES DO USUÁRIO" ---
    const modalInfo = document.getElementById('modalInfo');
    function abrirModal(modal) { if (modal) { modal.classList.add('aberta'); document.body.style.overflow = 'hidden'; }}
    function fecharModal(modal) { if (modal) { modal.classList.remove('aberta'); document.body.style.overflow = ''; }}
    
    document.getElementById('abrirInfo')?.addEventListener('click', () => { 
        // Você precisará adicionar a função carregarDadosUsuario aqui se quiser que o modal de config funcione
        abrirModal(modalInfo); 
    });
    document.getElementById('fecharInfo')?.addEventListener('click', () => fecharModal(modalInfo));
    document.getElementById('cancelarInfo')?.addEventListener('click', () => fecharModal(modalInfo));
    if (modalInfo) modalInfo.addEventListener('click', (e) => { if (e.target === modalInfo) fecharModal(modalInfo); });
    
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') fecharModal(modalInfo); });

    // --- LÓGICA ESPECÍFICA DA PÁGINA DE CURIOSIDADES ---
    const cardData = [
        { title: "Sua genética influencia seus resultados", text: "Nem todos ganham massa da mesma forma — e tá tudo bem.", link: "cur-top/cur1.html" },
        { title: "Musculação fortalece corpo e mente", text: "Mais do que físico, o treino transforma a forma como você se vê.", link: "cur-top/cur2.html" },
        { title: "Músculos fortes = menos lesões", text: "A musculação é um escudo contra lesões e dores.", link: "cur-top/cur3.html" },
        { title: "Treinar pode prolongar sua vida", text: "Musculação é qualidade de vida agora — e na velhice.", link: "cur-top/cur4.html" },
        { title: "O sedentarismo é o maior inimigo da sua saúde", text: "Ficar parado cobra um preço alto.", link: "cur-top/cur5.html" }
    ];

    const carouselInner = document.querySelector(".carousel-inner");
    const cardTitle = document.getElementById("card-title");
    const cardText = document.getElementById("card-text");
    const cardLink = document.getElementById("card-link");
    const items = document.querySelectorAll(".carousel-item");
    let index = 0;
    let autoPlayInterval;

    function updateCarousel() {
        if (carouselInner && items.length > 0) {
            carouselInner.style.transform = `translateX(${-index * 100}%)`;
            updateCard(index);
        }
    }

    function updateCard(newIndex) {
        if (cardTitle && cardText && cardLink && cardData[newIndex]) {
            const currentData = cardData[newIndex];
            cardTitle.textContent = currentData.title;
            cardText.textContent = currentData.text;
            cardLink.href = currentData.link;
            cardLink.textContent = "Ver mais";
        }
    }

    function startAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(() => {
            index = (index + 1) % items.length;
            updateCarousel();
        }, 5000); // Muda a cada 5 segundos
    }

    const nextButton = document.querySelector(".next");
    if (nextButton && items.length > 0) {
        nextButton.addEventListener("click", () => {
            index = (index + 1) % items.length;
            updateCarousel();
            startAutoPlay(); // Reinicia o temporizador
        });
    }

    const prevButton = document.querySelector(".prev");
    if (prevButton && items.length > 0) {
        prevButton.addEventListener("click", () => {
            index = (index - 1 + items.length) % items.length;
            updateCarousel();
            startAutoPlay(); // Reinicia o temporizador
        });
    }

    // Inicializa o card e o auto-play
    updateCard(0);
    startAutoPlay();
});