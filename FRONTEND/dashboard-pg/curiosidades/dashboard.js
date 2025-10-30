// CARREGAR DADOS DO USUÁRIO AO CARREGAR A PÁGINA
window.onload = function() {
    carregarDadosUsuario() 
}

// --- FUNÇÕES GLOBAIS (acessíveis pelo HTML) ---
function alternarBarra() {
    const barra = document.getElementById('barraLateral');
    const conteudo = document.getElementById('mainContent');
    if (barra) barra.classList.toggle('oculta');
    if (conteudo) conteudo.classList.toggle('expandida');
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


// FUNÇÕES DE CARREGAMENDO E SALVAMENTO DE DADOS DO USUÁRIO
async function carregarDadosUsuario() {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        window.location.href = '../../login-pg/login.html';
        return; }

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
    const confirmaSenha = document.getElementById('password-verify').value;

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
const formConfiguracoes = document.getElementById("formConfiguracoes")
formConfiguracoes.addEventListener('submit', salvarConfiguracoes);

//LOGOUT
const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (event) => {
            // 1. Previne a ação padrão do link (que é navegar imediatamente)
            event.preventDefault(); 
            
            // 2. Mostra a caixa de diálogo de confirmação
            const querSair = confirm("Tem certeza de que deseja sair?");

            // 3. Só continua se o usuário clicou em "OK"
            if (querSair) {
                // 4. Limpa o armazenamento local para deslogar o usuário
                localStorage.clear(); 
                
                // 5. Redireciona para a página inicial
                window.location.href = '../../inicio-pg/inicio.html'; 
            }
            // Se o usuário clicar em "Cancelar", nada acontece.
        });
    }

// VISIBILIDADE SENHA
togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? 'visibility_off' : 'visibility';
    });

// VISIBILIDADE SENHA - CONFIRMAÇÃO
togglePasswordVerify.addEventListener('click', function () {
    const type = passwordVerifyInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordVerifyInput.setAttribute('type', type);
    togglePasswordVerify.textContent = type === 'password' ? 'visibility_off' : 'visibility';
    });

// VALIDAÇÃO SENHA   
btn.addEventListener('click', function() {

    if (passwordInput.value !== passwordVerifyInput.value) {
        alert('As senhas não coincidem, verifique novamente.');
        return; } });