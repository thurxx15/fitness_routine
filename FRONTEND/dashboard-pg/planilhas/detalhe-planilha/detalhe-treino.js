// ARQUIVO: detalhe-treino.js

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. VERIFICAÇÃO DE LOGIN E PEGAR O TOKEN ---
    const authToken = localStorage.getItem('access_token');
    if (!authToken) {
        window.location.href = "../../login-pg/login.html"; // Volta pro login se não estiver logado
        return;
    }

    // --- 2. LER O ID DO TREINO DA URL ---
    const params = new URLSearchParams(window.location.search);
    const treinoId = params.get('id');

    // Se não houver ID na URL, mostra um erro.
    if (!treinoId) {
        document.body.innerHTML = '<div style="text-align: center; padding: 50px;"><h1>Erro: ID do treino não fornecido.</h1><a href="planilhas.html">Voltar para a lista de treinos</a></div>';
        return;
    }

    // --- 3. ELEMENTOS DA PÁGINA ---
    const nomeTreinoEl = document.getElementById('nome-treino');
    const objetivoTreinoEl = document.getElementById('objetivo-treino');
    const corpoTreinoEl = document.getElementById('corpo-treino');

    // --- 4. BUSCAR OS DETALHES DO TREINO NA NOVA API ---
    async function carregarDetalhesDoTreino() {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/treino-detalhe/${treinoId}/`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });

            if (!response.ok) {
                throw new Error('Treino não encontrado ou você não tem permissão para vê-lo.');
            }

            const dadosDoTreino = await response.json();
            exibirDetalhesNaPagina(dadosDoTreino);

        } catch (error) {
            nomeTreinoEl.textContent = 'Erro ao Carregar Treino';
            corpoTreinoEl.innerHTML = `<p style="color: red;">${error.message}</p>`;
        }
    }

    // --- 5. FUNÇÃO PARA EXIBIR OS DADOS NA PÁGINA ---
    function exibirDetalhesNaPagina(dados) {
        nomeTreinoEl.textContent = dados.nome_treino;
        objetivoTreinoEl.textContent = `Objetivo: ${dados.objetivo}`;
        
        corpoTreinoEl.innerHTML = ''; // Limpa a mensagem de "carregando"

        // Reutilizamos a mesma lógica de agrupar por dia!
        const exerciciosAgrupados = (dados.exercicios || []).reduce((acc, ex) => {
            const dia = ex.dia_semana || 'Não especificado';
            (acc[dia] = acc[dia] || []).push(ex);
            return acc;
        }, {});
        
        const ordemDias = ["Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado","Domingo","Não especificado"];

        for (const dia of ordemDias) {
            if (exerciciosAgrupados[dia]) {
                let tabelaHtml = `<h3 class="dia-titulo">${dia}</h3><table class="tabela-dia"><thead><tr><th>Exercício</th><th>Séries</th><th>Repetições</th><th>Descanso</th></tr></thead><tbody>`;
                exerciciosAgrupados[dia].forEach(ex => {
                    const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(ex.nome_exercicio + ' exercicio')}`;
                    tabelaHtml += `<tr><td><a href="${youtubeUrl}" target="_blank" class="exercicio-link">${ex.nome_exercicio}</a></td><td>${ex.series}</td><td>${ex.repeticoes}</td><td>${ex.descanso}</td></tr>`;
                });
                tabelaHtml += `</tbody></table>`;
                corpoTreinoEl.innerHTML += tabelaHtml;
            }
        }
    }
    
    // Inicia todo o processo assim que a página carrega
    carregarDetalhesDoTreino();
});