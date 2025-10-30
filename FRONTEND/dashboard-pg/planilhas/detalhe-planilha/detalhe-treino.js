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
        
        for (const dia of ordemDias) {
            if (exerciciosAgrupados[dia]) {
                const slide = document.createElement('div');
                slide.className = 'carrossel-slide';
                let slideHtml = `<h3 class="dia-titulo">${dia.toUpperCase()}</h3><table class="tabela-dia"><tbody>`;
                exerciciosAgrupados[dia].forEach(ex => {
                    const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(ex.nome_exercicio + ' exercicio')}`;
                    slideHtml += `<tr><td><a href="${youtubeUrl}" target="_blank" class="exercicio-link">${ex.nome_exercicio}</a></td><td>${ex.series}x${ex.repeticoes}</td><td>${ex.descanso}s</td></tr>`;
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
    function gerarPdfDoTreino() {
        if (!dadosDoTreinoAtual) {
            alert("Erro: Dados do treino não carregados.");
            return;
        }
        
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        doc.setFontSize(20);
        doc.text(`Plano de Treino: ${dadosDoTreinoAtual.nome_treino.toUpperCase()}`, 105, 22, { align: 'center' });
        doc.setFontSize(12);
        doc.text(`Objetivo: ${dadosDoTreinoAtual.objetivo}`, 14, 32);

        const allRows = [];
        const exerciciosAgrupados = (dadosDoTreinoAtual.exercicios || []).reduce((acc, ex) => {
            const dia = ex.dia_semana || 'Exercícios';
            (acc[dia] = acc[dia] || []).push(ex);
            return acc;
        }, {});
        const ordemDias = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo", "Não especificado"];

        for (const dia of ordemDias) {
            if (exerciciosAgrupados[dia]) {
                allRows.push([{ content: dia.toUpperCase(), colSpan: 3, styles: { halign: 'center', fillColor: [220, 220, 220], textColor: [40, 40, 40], fontStyle: 'bold' } }]);
                exerciciosAgrupados[dia].forEach(ex => {
                    allRows.push([ex.nome_exercicio, `${ex.series}x${ex.repeticoes}`, `${ex.descanso}s`]);
                });
            }
        }

        doc.autoTable({
            startY: 40,
            head: [['Exercício', 'Séries x Repetições', 'Descanso']],
            body: allRows,
            theme: 'grid',
            headStyles: { fillColor: [60, 9, 108], textColor: [255, 255, 255], fontStyle: 'bold' },
            alternateRowStyles: { fillColor: [245, 245, 245] },
            columnStyles: { 0: { fontStyle: 'bold' } }
        });
        
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