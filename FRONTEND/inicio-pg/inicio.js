document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        const allLinks = document.querySelectorAll('#nav-links a');
        allLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // --- LÓGICA DA ANIMAÇÃO DE MALHA INTERATIVA ---
    const canvas = document.getElementById('background-mesh');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray;

        // Posição do mouse
        const mouse = {
            x: null,
            y: null,
            radius: (canvas.height / 100) * (canvas.width / 100)
        };

        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        });
        
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Classe da Partícula
        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                // Interação com o mouse
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius + this.size) {
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                        this.x += 5;
                    }
                    if (mouse.x > this.x && this.x > this.size * 10) {
                        this.x -= 5;
                    }
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                        this.y += 5;
                    }
                    if (mouse.y > this.y && this.y > this.size * 10) {
                        this.y -= 5;
                    }
                }
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        function init() {
            particlesArray = [];
            let numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 0.4) - 0.2;
                let directionY = (Math.random() * 0.4) - 0.2;
                let color = '#c8b8db'; // Cor da partícula
                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                                   ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(102, 51, 153, ${opacityValue})`; // Cor da linha (roxo mais escuro)
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connect();
        }

        window.addEventListener('resize', () => {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            mouse.radius = (canvas.height / 100) * (canvas.width / 100);
            init();
        });

        init();
        animate();
    }

     // --- LÓGICA PARA ANIMAÇÃO DE SCROLL ---
    // Seleciona todos os elementos que devem ser animados ao rolar a página
    const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-fade-in');

    // Cria o observador que vai "vigiar" os elementos
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o elemento está visível na tela
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para ativar a animação de entrada
                entry.target.classList.add('visible');
            } 
            // Se o elemento saiu da tela
            else {
                // Remove a classe 'visible' para resetar a animação para a próxima vez
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.3 // A animação começa quando 10% do elemento está visível
    });

    // Pede ao observador para começar a "vigiar" cada um dos elementos selecionados
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});