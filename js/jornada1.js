// Função para ocultar a tela de carregamento após o carregamento da página
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const pageContent = document.getElementById('page-content');
    
    setTimeout(() => {
        loadingScreen.style.display = 'none';  // Esconde a tela de carregamento
        pageContent.style.display = 'block';  // Mostra o conteúdo da página
    }, 1500);  // Sincroniza com a duração da animação da moeda
}

const playerName = localStorage.getItem('playerName') || "Guerreiro"; // Pega o nome do jogador armazenado
document.getElementById("playerNameDisplay").innerText = playerName;

let stageIndex = 0;

const stages = [
    "Em uma terra dominada pela guerra, um jovem guerreiro chamado " + playerName + " se ergue para defender seu reino.",
    "Após ser convocado pelo rei, " + playerName + " se prepara para a batalha em Azincourt.",
    "Com bravura, " + playerName + " lidera seus companheiros e enfrenta os inimigos com estratégia.",
    "Após a vitória, " + playerName + " é celebrado como um herói e ganha a confiança do rei.",
    "Mas novas ameaças surgem no horizonte, e " + playerName + " deve se preparar para novos desafios."
];

function nextStage() {
    stageIndex++;
    if (stageIndex < stages.length) {
        document.getElementById("journeyText").innerText = stages[stageIndex];
    } else {
        // Redireciona para a próxima fase do jogo
        window.location.href = 'nextPhase.html'; // Substitua pelo próximo HTML
    }
}
