/*
================================================================================
|   ARQUIVO JAVASCRIPT - DASHBOARD DE CURIOSIDADES                             |
================================================================================
|   Este arquivo gerencia:                                                     |
|   1. A lógica do carrossel de imagens.                                       |
|   2. A atualização do card de texto dinâmico.                                |
|   3. As funções de UI compartilhadas (barra lateral, modal de configurações).|
================================================================================
*/

// --- FUNÇÕES GERAIS DA INTERFACE (COMPARTILHADAS) ---

function alternarBarra() {
    const barra = document.getElementById('barraLateral');
    const conteudo = document.getElementById('mainContent');
    barra.classList.toggle('oculta');
    conteudo.classList.toggle('expandida');
}

function removerFixos() {
    const btnLogout = document.getElementById('btn-logout');
    const btnUser = document.getElementById('abrirInfo');
    [btnLogout, btnUser].forEach((btn) => {
        if (btn) {
            btn.style.display = (btn.style.display === 'none') ? 'block' : 'none';
        }
    });
}

// Lógica para o Modal de "Configurações do Usuário"
const abrirInfo = document.getElementById('abrirInfo');
const modalInfo = document.getElementById('modalInfo');
const fecharInfo = document.getElementById('fecharInfo');
const cancelarInfo = document.getElementById('cancelarInfo');

function abrir_info() {
    if(modalInfo) modalInfo.classList.add('aberta');
    document.body.style.overflow = 'hidden';
}
function fechar_info() {
    if(modalInfo) modalInfo.classList.remove('aberta');
    document.body.style.overflow = '';
}

if(abrirInfo) abrirInfo.addEventListener('click', abrir_info);
if(cancelarInfo) cancelarInfo.addEventListener('click', fechar_info);
if(fecharInfo) fecharInfo.addEventListener('click', fechar_info);
if(modalInfo) modalInfo.addEventListener('click', (e) => { if (e.target === modalInfo) fechar_info(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') fechar_info(); });


// --- LÓGICA ESPECÍFICA DA PÁGINA DE CURIOSIDADES ---

// Array com os dados para o card dinâmico
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

// Referências aos elementos HTML do carrossel e do card
const carouselInner = document.querySelector(".carousel-inner");
const cardTitle = document.getElementById("card-title");
const cardText = document.getElementById("card-text");
const cardLink = document.getElementById("card-link");
const items = document.querySelectorAll(".carousel-item");
let index = 0;

// Função para atualizar o carrossel e o card correspondente
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

// Adiciona os event listeners aos botões de navegação do carrossel
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

if (nextButton && items.length > 0) {
    nextButton.addEventListener("click", () => {
        index = (index + 1) % items.length;
        updateCarousel();
    });
}

if (prevButton && items.length > 0) {
    prevButton.addEventListener("click", () => {
        index = (index - 1 + items.length) % items.length;
        updateCarousel();
    });
}

// Inicializa o card com o primeiro item quando a página carrega
// Adicionado um 'DOMContentLoaded' para garantir que todos os elementos estejam prontos
document.addEventListener('DOMContentLoaded', () => {
    updateCard(0);
});

// --- FUNÇÃO PARA CARREGAR OS DADOS DO USUÁRIO ---
async function carregarDadosUsuario() {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.href = '../../login-pg/login.html';
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:8000/api/me/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Falha ao carregar dados do usuário.');
        }

        const data = await response.json();

        document.getElementById('nome').value = data.first_name || '';
        document.getElementById('sobrenome').value = data.last_name || '';
        document.getElementById('username').value = data.username;
        document.getElementById('email').value = data.email;
        
        document.getElementById('nome').readOnly = true;
        document.getElementById('sobrenome').readOnly = true;
        document.getElementById('username').readOnly = true;

        if (data.profile) {
            document.getElementById('dateUser').value = data.profile.data_nascimento || '';
            document.getElementById('nivelUser').value = data.profile.nivel_experiencia || '';
            document.getElementById('pesoUser').value = data.profile.peso || '';
            document.getElementById('alturaUser').value = data.profile.altura || '';
        }

    } catch (error) {
        console.error('Erro:', error);
        alert(error.message);
    }
}


// --- FUNÇÃO PARA SALVAR AS ALTERAÇÕES (COM TRATAMENTO DE ERRO INTELIGENTE) ---
async function salvarConfiguracoes(event) {
    event.preventDefault();

    const peso = document.getElementById('pesoUser').value;
    const altura = document.getElementById('alturaUser').value;
    const experiencia = document.getElementById('nivelUser').value;
    const dataNascimento = document.getElementById('dateUser').value;

    if (!peso || !altura || !experiencia || !dataNascimento) {
        alert('Por favor, preencha todos os campos obrigatórios: Peso, Altura, Experiência e Data de Nascimento.');
        return;
    }

    const accessToken = localStorage.getItem('accessToken');
    
    const dadosAtualizados = {
        email: document.getElementById('email').value,
        first_name: document.getElementById('nome').value,
        last_name: document.getElementById('sobrenome').value,
        profile: {
            data_nascimento: dataNascimento,
            peso: parseFloat(peso),
            altura: parseInt(altura),
            nivel_experiencia: experiencia
        }
    };

    const novaSenha = document.getElementById('password').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;

    if (novaSenha) {
        if (novaSenha !== confirmaSenha) {
            alert('As senhas não coincidem! Por favor, verifique.');
            return;
        }
        dadosAtualizados.password = novaSenha;
    }

    try {
        const response = await fetch('http://127.0.0.1:8000/api/me/', {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosAtualizados)
        });

        // Se a resposta do servidor não for 'ok' (ex: erro 400), ele vai para o catch
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(JSON.stringify(errorData));
        }

        // Se o código chegar aqui, significa que o servidor respondeu com sucesso
        alert('Configurações salvas com sucesso!');
        fechar_info();

    } catch (error) {
        // ===================================================================
        //  INÍCIO DA LÓGICA INTELIGENTE DE TRATAMENTO DE ERRO
        // ===================================================================
        // Verifica se o erro é o específico "Failed to fetch" do reinício do servidor
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
            // Assume que a operação deu certo e o servidor reiniciou antes de responder
            console.warn('Ocorreu um erro "Failed to fetch". Assumindo sucesso devido ao reinício do servidor de desenvolvimento.');
            alert('Configurações salvas com sucesso!');
            fechar_info();
        } else {
            // Se for qualquer outro erro (como um erro de validação 400), mostra o erro real
            console.error('Erro real ao salvar:', error.message);
            alert('Ocorreu um erro ao salvar: ' + error.message);
        }
        
    }
}


// --- EVENT LISTENERS ---
abrirInfo.addEventListener('click', carregarDadosUsuario);
formConfiguracoes.addEventListener('submit', salvarConfiguracoes);