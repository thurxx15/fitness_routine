document.addEventListener('DOMContentLoaded', () => {

    const authToken = localStorage.getItem('accessToken') || localStorage.getItem('access_token');
    if (!authToken) {
        window.location.href = "../../login-pg/login.html";
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const treinoId = params.get('id');

    if (!treinoId) {
        document.body.innerHTML = '<h1>Erro: ID do treino não fornecido.</h1>';
        return;
    }

    const nomeTreinoEl = document.getElementById('nome-treino');
    const objetivoTreinoEl = document.getElementById('objetivo-treino');
    const trilhoCarrossel = document.getElementById('carrossel-trilho');
    const btnDownload = document.getElementById('btnDownloadPdf');
    const btnEsquerda = document.getElementById('btnCarrosselEsquerda');
    const btnDireita = document.getElementById('btnCarrosselDireita');
    
    let dadosDoTreinoAtual = null;
    let slideIndex = 0;
    let slides = [];

    function moverParaSlide(index) {
        if (trilhoCarrossel) {
            trilhoCarrossel.style.transform = `translateX(-${100 * index}%)`;
        }
    }

    function atualizarBotoes() {
        if (btnEsquerda) btnEsquerda.disabled = (slideIndex === 0);
        if (btnDireita) btnDireita.disabled = (slideIndex === slides.length - 1);
    }

    function exibirDetalhesNaPagina(dados) {
        nomeTreinoEl.textContent = dados.nome_treino.toUpperCase();
        objetivoTreinoEl.textContent = `Objetivo: ${dados.objetivo}`;
        trilhoCarrossel.innerHTML = '';
        
        const exerciciosAgrupados = (dados.exercicios || []).reduce((acc, ex) => {
            const dia = ex.dia_semana || 'Não especificado';
            (acc[dia] = acc[dia] || []).push(ex);
            return acc;
        }, {});
        
        const ordemDias = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo", "Não especificado"];
        
        // Ícone SVG do YouTube (Play Button)
        const youtubeSvg = `
            <svg class="icon-youtube" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
        `;
        
        for (const dia of ordemDias) {
            if (exerciciosAgrupados[dia]) {
                const slide = document.createElement('div');
                slide.className = 'carrossel-slide';
                
                let slideHtml = `
                    <h3 class="dia-titulo">${dia.toUpperCase()}</h3>
                    <table class="tabela-dia">
                        <tbody>`;
                
                exerciciosAgrupados[dia].forEach(ex => {
                    const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(ex.nome_exercicio + ' exercicio')}`;
                    
                    slideHtml += `
                        <tr>
                            <td>
                                <div class="conteudo-exercicio">
                                    <span class="texto-exercicio">${ex.nome_exercicio}</span>
                                    <a href="${youtubeUrl}" target="_blank" class="link-youtube" title="Ver como fazer no YouTube">
                                        ${youtubeSvg}
                                    </a>
                                </div>
                            </td>
                            <td>${ex.series}x${ex.repeticoes}</td>
                            <td>${ex.descanso}s</td>
                        </tr>`;
                });
                
                slideHtml += `</tbody></table>`;
                slide.innerHTML = slideHtml;
                trilhoCarrossel.appendChild(slide);
            }
        }
        
        slides = Array.from(trilhoCarrossel.children);
        if (slides.length <= 1) {
            if (btnEsquerda) btnEsquerda.style.display = 'none';
            if (btnDireita) btnDireita.style.display = 'none';
        } else {
            slideIndex = 0;
            moverParaSlide(slideIndex);
            atualizarBotoes();
        }
    }

    // =============================================================
    // FUNÇÃO PDF COMPLETA E CORRIGIDA
    // =============================================================
   // =============================================================
    // FUNÇÃO PDF ALTERADA: TABELAS SEPARADAS POR DIA
    // =============================================================
    // =============================================================
    // FUNÇÃO PDF: DESIGN MELHORADO E CENTRALIZADO
    // =============================================================
    // =============================================================
    // FUNÇÃO PDF: DESIGN DE ALTA VISIBILIDADE PARA OS DIAS
    // =============================================================
    function gerarPdfDoTreino() {
        if (!dadosDoTreinoAtual) {
            alert("Erro: Dados do treino não carregados.");
            return;
        }
        
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Cores e Medidas
        const themeColor = [60, 9, 108]; // Roxo escuro
        const lightGray = [245, 245, 245];
        const pageWidth = doc.internal.pageSize.getWidth();
        const marginX = 14; // Margem lateral padrão do autoTable
        const contentWidth = pageWidth - (marginX * 2);

        // --- 1. Topo da Página (Cabeçalho do Documento) ---
        doc.setFillColor(...themeColor);
        doc.rect(0, 0, pageWidth, 25, 'F'); // Barra superior maior

        doc.setFontSize(22);
        doc.setTextColor(255, 255, 255);
        doc.setFont(undefined, 'bold');
        doc.text(dadosDoTreinoAtual.nome_treino.toUpperCase(), pageWidth / 2, 17, { align: 'center' });
        
        // Subtítulo (Objetivo)
        doc.setFontSize(12);
        doc.setTextColor(50, 50, 50);
        doc.setFont(undefined, 'normal');
        doc.text(`Objetivo: ${dadosDoTreinoAtual.objetivo}`, 14, 38);

        // Agrupamento de dados
        const exerciciosAgrupados = (dadosDoTreinoAtual.exercicios || []).reduce((acc, ex) => {
            const dia = ex.dia_semana || 'Outros';
            (acc[dia] = acc[dia] || []).push(ex);
            return acc;
        }, {});
        
        const ordemDias = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo", "Não especificado"];

        let finalY = 50; // Começa um pouco mais abaixo

        for (const dia of ordemDias) {
            if (exerciciosAgrupados[dia]) {
                
                // Calcula quantas linhas essa tabela vai ter para evitar quebra ruim
                const qtdLinhas = exerciciosAgrupados[dia].length;
                const alturaEstimada = 15 + (qtdLinhas * 10); // Cabeçalho dia + linhas

                // Se não couber na página, joga tudo para a próxima
                if (finalY + alturaEstimada > 280) {
                    doc.addPage();
                    finalY = 20;
                }

                // --- CABEÇALHO DO DIA (VISIBILIDADE MÁXIMA) ---
                
                // 1. Barra de Fundo do Dia (Largura total das margens)
                doc.setFillColor(...themeColor);
                // Desenha um retângulo preenchido
                doc.rect(marginX, finalY, contentWidth, 10, 'F'); 

                // 2. Texto do Dia
                doc.setFontSize(13);
                doc.setTextColor(255, 255, 255); // Branco
                doc.setFont(undefined, 'bold');
                // Centraliza o texto dentro da barra roxa
                doc.text(dia.toUpperCase(), pageWidth / 2, finalY + 7, { align: 'center' });

                // --- TABELA ---
                const rowsDoDia = exerciciosAgrupados[dia].map(ex => [
                    ex.nome_exercicio, 
                    `${ex.series}x${ex.repeticoes}`, 
                    `${ex.descanso}s`
                ]);

                doc.autoTable({
                    startY: finalY + 10, // Cola exatamente abaixo da barra do dia
                    head: [['Exercício', 'Séries / Reps', 'Descanso']],
                    body: rowsDoDia,
                    theme: 'grid',
                    
                    // Estilo do Cabeçalho da Tabela (Cinza claro para contrastar com o dia Roxo)
                    headStyles: { 
                        fillColor: [220, 220, 220], 
                        textColor: [40, 40, 40],    
                        fontStyle: 'bold',
                        halign: 'center',
                        lineWidth: 0.1,
                        lineColor: [180, 180, 180]
                    },
                    // Estilo do Corpo
                    bodyStyles: {
                        textColor: [0, 0, 0],
                        halign: 'center',
                        cellPadding: 4,
                        fontSize: 10
                    },
                    // Estilo da primeira coluna (Nome do exercício)
                    columnStyles: { 
                        0: { halign: 'left', fontStyle: 'bold', cellWidth: 'auto' } 
                    },
                    // Bordas gerais
                    styles: {
                        lineColor: [200, 200, 200],
                        lineWidth: 0.1
                    },
                    // Remove margens extras pois já controlamos o Y
                    margin: { left: marginX, right: marginX }
                });

                // Espaço maior entre os dias para dar respiro visual
                finalY = doc.lastAutoTable.finalY + 15;
            }
        }
        
        doc.save(`treino_${dadosDoTreinoAtual.nome_treino}.pdf`);
    }

    async function carregarDetalhesDoTreino() {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/treino-detalhe/${treinoId}/`, {
                headers: { 'Authorization': `Bearer ${authToken}` }
            });
            if (!response.ok) throw new Error('Treino não encontrado.');
            
            dadosDoTreinoAtual = await response.json();
            exibirDetalhesNaPagina(dadosDoTreinoAtual);
            
        } catch (error) {
            if (nomeTreinoEl) nomeTreinoEl.textContent = 'ERRO AO CARREGAR';
        }
    }
    
    btnDireita?.addEventListener('click', () => {
        if (slideIndex < slides.length - 1) {
            slideIndex++;
            moverParaSlide(slideIndex);
            atualizarBotoes();
        }
    });

    btnEsquerda?.addEventListener('click', () => {
        if (slideIndex > 0) {
            slideIndex--;
            moverParaSlide(slideIndex);
            atualizarBotoes();
        }
    });

    btnDownload?.addEventListener('click', gerarPdfDoTreino);

    carregarDetalhesDoTreino();
});