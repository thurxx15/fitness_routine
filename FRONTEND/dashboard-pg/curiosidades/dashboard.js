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

// --- FUNÇÃO PARA CARREGAR OS DADOS DO USUÁRIO ---
async function carregarDadosUsuario() {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.href = '../../login-pg/login.html'; // Redireciona se não estiver logado
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

        // Preenche os campos do formulário com os dados da API
        document.getElementById('nome').value = data.first_name || '';
        document.getElementById('sobrenome').value = data.last_name || '';
        document.getElementById('username').value = data.username;
        document.getElementById('email').value = data.email;
        
        // Desabilita campos não editáveis
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


// --- FUNÇÃO PARA SALVAR AS ALTERAÇÕES ---
async function salvarConfiguracoes(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Validação de campos obrigatórios no front-end
    const peso = document.getElementById('pesoUser').value;
    const altura = document.getElementById('alturaUser').value;
    const experiencia = document.getElementById('nivelUser').value;
    console.log(experiencia);
    const dataNascimento = document.getElementById('dateUser').value;

    if (!peso || !altura || !experiencia || !dataNascimento) {
        alert('Por favor, preencha todos os campos obrigatórios: Peso, Altura, Experiência e Data de Nascimento.');
        return;
    }

    const accessToken = localStorage.getItem('accessToken');
    const dadosAtualizados = {
        email: document.getElementById('email').value, // Permite edição do email
        profile: {
            data_nascimento: dataNascimento,
            peso: parseFloat(peso),
            altura: parseInt(altura),
            nivel_experiencia: experiencia
        }
    };

    try {
        const response = await fetch('http://127.0.0.1:8000/api/me/', {
            method: 'PATCH', // PATCH é ideal para atualizações parciais
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosAtualizados)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error('Falha ao salvar as configurações: ' + JSON.stringify(errorData));
        }

        alert('Configurações salvas com sucesso!');
        fechar_info(); // Fecha o modal após o sucesso

    } catch (error) {
        console.error('Erro ao salvar:', error);
        alert(error.message);
    }
}

// Carrega os dados quando o modal é aberto
abrirInfo.addEventListener('click', carregarDadosUsuario);

// Salva os dados quando o formulário é enviado
formConfiguracoes.addEventListener('submit', salvarConfiguracoes);


document.addEventListener('DOMContentLoaded', function() {
    
    const logoutButton = document.getElementById('btn-logout');

    // Verifica se o botão de logout existe na página
    if (logoutButton) {
        logoutButton.addEventListener('click', async function() {

            // 1. Pegar os tokens do localStorage
            const accessToken = localStorage.getItem('access_token');
            const refreshToken = localStorage.getItem('refresh_token');

            if (!refreshToken) {
                console.error('Refresh token não encontrado para fazer logout.');
                // Mesmo se não houver token, limpe tudo e redirecione
                localStorage.clear();
                window.location.href = '../../inicio-pg/inicio.html'; // Redireciona para a página de login
                return;
            }

            try {
                // 2. Chamar o endpoint de logout do backend
                const response = await fetch('http://127.0.0.1:8000/api/logout/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // O endpoint de logout também é protegido, então precisamos do access token
                        'Authorization': `Bearer ${accessToken}` 
                    },
                    body: JSON.stringify({
                        'refresh_token': refreshToken
                    })
                });

                if (response.ok) {
                    console.log('Logout realizado com sucesso no backend.');
                } else {
                    // Mesmo que o backend falhe, o logout no frontend deve continuar
                    console.error('Falha no logout do backend, mas prosseguindo com o logout local.');
                }

            } catch (error) {
                console.error('Erro de rede ao tentar fazer logout:', error);
            } finally {
                // 3. Limpar o localStorage e redirecionar (acontece sempre)
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                // localStorage.clear(); // Alternativa para limpar tudo

                // 4. Redirecionar o usuário para a página de login
                window.location.href = '../../inicio-pg/inicio.html';
            }
        });
    }
});

window.onload = function() {
    carregarDadosUsuario()
}

const passwordInput = document.getElementById('password');
const passwordVerifyInput = document.getElementById('password-verify');
const togglePassword = document.getElementById('toggle-password');
const togglePasswordVerify = document.getElementById('toggle-password-verify');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? 'visibility_off' : 'visibility';
    });

    togglePasswordVerify.addEventListener('click', function () {
    const type = passwordVerifyInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordVerifyInput.setAttribute('type', type);
    togglePasswordVerify.textContent = type === 'password' ? 'visibility_off' : 'visibility';
    });

btn.addEventListener('click', function() {

    if (passwordInput.value !== passwordVerifyInput.value) {
        alert('As senhas não coincidem, verifique novamente.');
        return; } });