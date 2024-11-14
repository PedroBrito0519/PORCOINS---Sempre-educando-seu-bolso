// Função para ocultar a tela de carregamento após o carregamento da página
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const pageContent = document.getElementById('page-content');

    setTimeout(() => {
        loadingScreen.style.display = 'none';  // Esconde a tela de carregamento
        pageContent.style.display = 'block';    // Mostra o conteúdo da página
    }, 1500);  // Sincroniza com a duração da animação
}

// Função para mostrar informações da missão
function showMissionInfo(index, missionElement) {
    const missionInfo = document.getElementById('mission-info');
    const selectedMission = missions[index];

    missionInfo.querySelector('h2').textContent = `Informações da ${selectedMission.querySelector('p').textContent}`;
    missionInfo.querySelector('p').textContent = selectedMission.dataset.info;

    // Define a posição da div de informações ao lado da missão
    const rect = missionElement.getBoundingClientRect();
    missionInfo.style.top = `${rect.top + window.scrollY}px`;
    missionInfo.style.left = `${rect.right}px`; // Colando a imagem
    missionInfo.style.display = 'block'; // Mostra a div de informações

    // Usa uma imagem correspondente à missão
    const img = document.createElement('img');
    
    // Define a imagem para cada missão
    switch (index) {
        case 0:
            img.src = 'res/assets/etapa1.gif'; // Para a Missão 1
            break;
        case 1:
            img.src = 'res/assets/etapa2.gif'; // Para a Missão 2
            break;
        case 2:
            img.src = 'res/assets/etapa3.gif'; // Para a Missão 3
            break;
        case 3:
            img.src = 'res/assets/etapa4.gif'; // Para a Missão 4
            break;
        case 4:
            img.src = 'res/assets/etapa5.gif'; // Para a Missão 5
            break;
        default:
            img.src = ''; // Para outras missões, se necessário
    }

    img.style.maxWidth = '100%';

    // Limpa imagens anteriores
    const existingImg = missionInfo.querySelector('img');
    if (existingImg) {
        existingImg.remove();
    }

    // Adiciona a imagem na parte superior
    missionInfo.prepend(img); 

    // Adiciona uma linha divisória abaixo da imagem
    const divider = document.createElement('hr'); // Cria uma linha
    missionInfo.appendChild(divider); // Adiciona a linha após a imagem
}

// Seleciona as missões
const missions = document.querySelectorAll('.mission');

// Adiciona eventos de mouse em cada missão
missions.forEach((mission, index) => {
    // Habilita ou desabilita o clique com base na classe
    if (mission.classList.contains('unlocked')) {
        mission.addEventListener('mouseenter', () => {
            showMissionInfo(index, mission);
        });
        mission.addEventListener('mouseleave', () => {
            const missionInfo = document.getElementById('mission-info');
            missionInfo.style.display = 'none'; // Esconde a div de informações ao sair
            const img = missionInfo.querySelector('img');
            if (img) {
                img.remove(); // Remove a imagem
            }
            const divider = missionInfo.querySelector('hr');
            if (divider) {
                divider.remove(); // Remove a linha
            }
        });
    } else {
        mission.style.cursor = 'not-allowed'; // Indica que a missão está bloqueada
    }
});

// Inicializa a página
hideLoadingScreen();
