// Funções para abrir e fechar as modais
function openOptions() {
    document.getElementById("optionsModal").style.display = "block";
}

function openVolume() {
    document.getElementById("volumeModal").style.display = "block";
}

function closeModal() {
    document.getElementById("optionsModal").style.display = "none";
}

function closeVolumeModal() {
    document.getElementById("volumeModal").style.display = "none";
}

function saveOptions() {
    // Aqui você pode adicionar a lógica para salvar os controles
    alert('Controles salvos!');
    closeModal();
}

function saveVolume() {
    const musicVolume = document.getElementById("musicVolume").value;
    const effectsVolume = document.getElementById("effectsVolume").value;
    
    // Aqui você pode adicionar a lógica para aplicar os volumes
    alert(`Volume da Música: ${musicVolume}, Volume dos Efeitos: ${effectsVolume}`);
    closeVolumeModal();
}

// Para fechar a modal quando clicar fora dela
window.onclick = function(event) {
    const optionsModal = document.getElementById("optionsModal");
    const volumeModal = document.getElementById("volumeModal");
    
    if (event.target == optionsModal) {
        closeModal();
    } else if (event.target == volumeModal) {
        closeVolumeModal();
    }
}



//audio
const backgroundMusic = document.getElementById('backgroundMusic');
const attackSound = document.getElementById('attackSound');

// Função para iniciar a música de fundo
function playBackgroundMusic() {
    backgroundMusic.volume = 0.5; // Ajuste o volume inicial
    backgroundMusic.play().catch(error => {
        console.error("Erro ao tocar a música de fundo:", error);
    });
}

// Função para tocar o som de ataque
function playAttackSound() {
    attackSound.volume = 1.0; // Ajuste o volume do efeito sonoro
    attackSound.currentTime = 0; // Reinicia o som
    attackSound.play().catch(error => {
        console.error("Erro ao tocar o som de ataque:", error);
    });
}

// Função para ajustar o volume
function setVolume(value) {
    backgroundMusic.volume = value; // Define o volume da música de fundo
    attackSound.volume = value; // Define o volume dos efeitos sonoros
}

// Função para mostrar opções
function showOptions() {
    playAttackSound(); // Toca o efeito sonoro ao mostrar opções
    alert("Opções ainda não implementadas!"); // Exemplo temporário
}

// Função para mostrar/ocultar os controles de volume
function toggleVolumeControl() {
    const controlsContainer = document.getElementById('controlsContainer');
    controlsContainer.classList.toggle('hidden');
}

// Função para iniciar o jogo
function startGame() {
    playAttackSound(); // Toca o efeito sonoro ao iniciar o jogo
    window.location.href = 'inicio.html';
}

// Iniciar a música ao carregar a página
window.onload = playBackgroundMusic;

// (Outras funções já implementadas permanecem aqui)
let currentStory = 0;

// Função para abrir a modal da história
function openStory(storyNumber) {
    currentStory = storyNumber - 1; // Ajusta o índice
    showStory(currentStory);
    document.getElementById("storyModal").style.display = "block";
}

// Função para mostrar a história
function showStory(storyIndex) {
    const titles = [
        "PORCOINS GAME",
        "PORCOINS GAME",
        "PORCOINS GAME"
    ];

    const texts = [
        "Bem-vindo ao PORCOINS GAME! Sua missão será ajudar João, um jovem de 16 anos, que não sabe o que é educação financeira ou como administrar seu dinheiro de forma eficaz. Junte-se a ele nesta jornada de aprendizado e autodescoberta.",
        
        "Ajude João a tomar decisões sábias, levando em consideração sua renda e os sonhos que ele deseja realizar. Cada escolha pode levá-lo mais perto de seus objetivos ou afastá-lo deles, então pense bem antes de agir!",
        
        "Conforme João aprende a gerenciar suas finanças, ele se depara com novos desafios , como economizar para um novo videogame ou decidir se deve investir em sua educação. Com sua ajuda, ele descobrirá o verdadeiro valor do dinheiro e como usá-lo para alcançar seus sonhos."
    ];
    
    document.getElementById("storyTitle").innerText = titles[storyIndex];
    document.getElementById("storyText").innerText = texts[storyIndex];
}

// Função para avançar na história
function nextStory() {
    if (currentStory < 2) { // Se não for a última história
        currentStory++;
        showStory(currentStory);
    } else {
        closeStoryModal(); // Fecha a modal se for a última
        window.location.href = 'batalha.html';
    }
}

// Função para fechar a modal da história
function closeStoryModal() {
    document.getElementById("storyModal").style.display = "none";
}

// (Outras funções já implementadas permanecem aqui)
let dialogueIndex = 0;
let playerName = "";
localStorage.setItem('playerName', playerName);
function selectLetter(letter) {
    const playerNameInput = document.getElementById("playerName");
    playerNameInput.value += letter; // Adiciona a letra ao nome
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        // Lógica para navegar para a letra anterior (se necessário)
    } else if (event.key === 'ArrowRight') {
        // Lógica para navegar para a letra seguinte (se necessário)
    }
});


function selectLetter(letter) {
    playerName += letter;
    updateNameInput();
}

function addSpace() {
    playerName += ' '; // Adiciona um espaço
    updateNameInput();
}

function removeLetter() {
    playerName = playerName.slice(0, -1); // Remove a última letra
    updateNameInput();
}

function updateNameInput() {
    document.getElementById("playerName").value = playerName; // Atualiza o campo de texto
}
let currentLetterIndex = 0; // Índice da letra atualmente selecionada

function selectLetter(letter) {
    playerName += letter;
    updateNameInput();
}

function addSpace() {
    playerName += ' ';
    updateNameInput();
}

function removeLetter() {
    playerName = playerName.slice(0, -1);
    updateNameInput();
}

function updateNameInput() {
    document.getElementById("playerName").value = playerName;
    highlightCurrentLetter();
}

function highlightCurrentLetter() {
    const letterButtons = document.querySelectorAll(".letter-btn");
    
    // Remove o destaque de todos os botões
    letterButtons.forEach((btn) => {
        btn.classList.remove("highlighted");
    });
    
    // Adiciona o destaque ao botão atual
    letterButtons[currentLetterIndex].classList.add("highlighted");
}

// Navegação com teclas
document.addEventListener('keydown', function(event) {
    const letterButtons = document.querySelectorAll(".letter-btn");

    // Impede a rolagem da página quando as setas são pressionadas
    if (event.key === 'ArrowRight') {
        currentLetterIndex = (currentLetterIndex + 1) % letterButtons.length; // Move para a próxima letra
        highlightCurrentLetter();
        event.preventDefault();
    } else if (event.key === 'ArrowLeft') {
        currentLetterIndex = (currentLetterIndex - 1 + letterButtons.length) % letterButtons.length; // Move para a letra anterior
        highlightCurrentLetter();
        event.preventDefault();
    } else if (event.key === 'ArrowUp') {
        currentLetterIndex = (currentLetterIndex - 1 + letterButtons.length) % letterButtons.length; // Move para a letra anterior
        highlightCurrentLetter();
        event.preventDefault();
    } else if (event.key === 'ArrowDown') {
        currentLetterIndex = (currentLetterIndex + 1) % letterButtons.length; // Move para a próxima letra
        highlightCurrentLetter();
        event.preventDefault();
    } else if (event.key === 'Enter') {
        selectLetter(letterButtons[currentLetterIndex].innerText);
    }
});

// Inicializa o destaque na primeira letra
highlightCurrentLetter();

//DIALOGO 
function nextDialogue() {
    if (dialogueIndex < dialogues.length) {
        const currentDialogue = dialogues[dialogueIndex];
        
        // Atualiza o texto da label
        document.getElementById("dialogueText").innerText = currentDialogue.text;

        // Atualiza a imagem do personagem
        if (currentDialogue.speaker === "king") {
            characterImage.src = "assets/REI.png"; // Exibe a imagem do rei
        } else {
            characterImage.src = "assets/personagem.png"; // Exibe a imagem do personagem
        }

        dialogueIndex++;
    } else {
        window.location.href = 'nextPhase.html'; // Redireciona para a próxima página
    }
}
// Função para ocultar a tela de carregamento após o carregamento da página
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const pageContent = document.getElementById('page-content');

    // Exibir o conteúdo após 2 segundos
    setTimeout(() => {
        loadingScreen.style.display = 'none';  // Esconde a tela de carregamento
        pageContent.style.display = 'block';    // Mostra o conteúdo da página
    }, 2000);  // Tempo que deve ser igual ou maior que a animação do cavaleiro
}
