const player = document.getElementById('player');
const enemies = document.querySelectorAll('.enemy');
const boss = document.querySelector('.boss');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modalMessage');
const restartBtn = document.getElementById('restartBtn');
const continueBtn = document.getElementById('continueBtn');

const playerHealthBar = document.getElementById('playerHealth');
const enemyHealthBar = document.getElementById('enemyHealth');
const bossHealthBar = document.getElementById('bossHealth');

// Estatísticas do jogador e inimigos
let playerHealth = 30;
let playerDamage = 20;
let enemyHealth = 10;
let enemyDamage = 10;
let bossHealth = 50;
let bossDamage = 10;

let isDefending = false;

// Atualiza as barras de saúde
function updateHealthBars() {
    playerHealthBar.style.width = `${(playerHealth / 30) * 100}px`;
    enemyHealthBar.style.width = `${(enemyHealth / 10) * 100}px`;
    bossHealthBar.style.width = `${(bossHealth / 50) * 100}px`;
}

// Movimento do jogador
document.addEventListener('keydown', (event) => {
    const playerRect = player.getBoundingClientRect();

    switch (event.key) {
        case 'ArrowRight':
            if (playerRect.right < window.innerWidth) {
                player.style.left = `${playerRect.left + 10}px`;
            }
            break;
        case 'ArrowLeft':
            if (playerRect.left > 0) {
                player.style.left = `${playerRect.left - 10}px`;
            }
            break;
        case 'ArrowUp':
            jump();
            break;
        case 'x':
            attackEnemies();
            break;
        case 'z':
            defend();
            break;
    }
});

// Função de pular
function jump() {
    const originalPosition = player.style.bottom || '50px';
    player.style.bottom = '100px'; // Eleva o personagem
    setTimeout(() => {
        player.style.bottom = originalPosition; // Retorna à posição original
    }, 500); // Tempo do pulo
}

// Função de defesa
function defend() {
    isDefending = true;
    // TODO: Adicionar efeito sonoro de defesa aqui
    setTimeout(() => {
        isDefending = false;
    }, 2000); // Defesa ativa por 2 segundos
}

// Função de ataque
function attackEnemies() {
    const playerRect = player.getBoundingClientRect();

    enemies.forEach((enemy) => {
        const enemyRect = enemy.getBoundingClientRect();

        // Verifica se o inimigo está dentro da distância de ataque (10 pixels)
        if (
            playerRect.x < enemyRect.x + enemyRect.width &&
            playerRect.x + playerRect.width > enemyRect.x &&
            Math.abs(playerRect.y - enemyRect.y) < 10 // Verifica a distância vertical
        ) {
            enemyHealth -= playerDamage;
            updateHealthBars(); // Atualiza a barra de saúde do inimigo
            
            // TODO: Adicionar efeito sonoro de ataque aqui
            if (enemyHealth <= 0) {
                enemy.style.display = 'none'; // Remove o inimigo
                enemyHealth = 10; // Reseta a vida do inimigo
                alert("Inimigo derrotado!");
            } else {
                if (!isDefending) {
                    playerHealth -= enemyDamage; // O inimigo ataca o jogador
                    // TODO: Adicionar efeito sonoro de dano ao jogador aqui
                } else {
                    alert("Você se defendeu do ataque!");
                }
                checkPlayerHealth();
            }
        }
    });
}
// Verifica a saúde do jogador
function checkPlayerHealth() {
    if (playerHealth <= 0) {
        modalMessage.innerText = "Você perdeu!";
        modal.style.display = 'flex';
    }
}

// Inicia a batalha contra o boss
function faceBoss() {
    boss.style.display = 'block'; // Mostra o boss
    bossHealthBar.style.display = 'block'; // Exibe a barra de saúde do boss
    updateHealthBars();
}

// Função de ataque ao boss
function attackBoss() {
    const playerRect = player.getBoundingClientRect();
    const bossRect = boss.getBoundingClientRect();

    // Verifica se o boss está dentro da distância de ataque (10 pixels)
    if (
        playerRect.x < bossRect.x + bossRect.width &&
        playerRect.x + playerRect.width > bossRect.x &&
        Math.abs(playerRect.y - bossRect.y) < 10
    ) {
        bossHealth -= playerDamage;
        updateHealthBars(); // Atualiza a barra de saúde do boss

        // TODO: Adicionar efeito sonoro de ataque ao boss aqui
        if (bossHealth <= 0) {
            modalMessage.innerText = "Parabéns, você ganhou!";
            continueBtn.style.display = 'block'; // Mostra o botão de continuar
            modal.style.display = 'flex'; // Mostra o modal
            boss.style.display = 'none'; // Esconde o boss
            bossHealthBar.style.display = 'none'; // Esconde a barra de saúde do boss
        }
    }
}

// Adiciona um evento de ataque ao boss quando todos os inimigos são derrotados
function checkAllEnemiesDefeated() {
    const allEnemiesDefeated = Array.from(enemies).every(enemy => enemy.style.display === 'none');

    if (allEnemiesDefeated) {
        faceBoss(); // Enfrenta o boss se todos os inimigos foram derrotados
    }
}

// Verifica colisões a cada 100ms
setInterval(() => {
    checkCollision(); // Verifica colisões com inimigos
}, 100);

// Reinicia o jogo
restartBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    resetGame();
});

// Continua para a próxima fase
continueBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    // Aqui você pode adicionar lógica para avançar para a próxima fase
});

// Função para resetar o jogo
function resetGame() {
    playerHealth = 30; // Reseta a vida do jogador
    player.style.left = '0px'; // Reseta a posição do jogador
    player.style.bottom = '50px'; // Reseta a posição vertical do jogador
    enemies.forEach(enemy => {
        enemy.style.display = 'block'; // Mostra os inimigos novamente
    });
    boss.style.display = 'none'; // Esconde o boss
    enemyHealth = 10; // Reseta a vida do inimigo
    bossHealth = 50; // Reseta a vida do boss
    updateHealthBars(); // Atualiza as barras de saúde
}
// Verifica colisões com inimigos
function checkCollision() {
    enemies.forEach((enemy) => {
        const enemyRect = enemy.getBoundingClientRect();
        const playerRect = player.getBoundingClientRect();

        if (
            playerRect.x < enemyRect.x + enemyRect.width &&
            playerRect.x + playerRect.width > enemyRect.x &&
            playerRect.y < enemyRect.y + enemyRect.height &&
            playerRect.y + playerRect.height > enemyRect.y
        ) {
            // O jogador colidiu com o inimigo
            if (!isDefending) {
                playerHealth -= enemyDamage; // O jogador perde vida
                // TODO: Adicionar efeito sonoro de dano ao jogador aqui
                checkPlayerHealth(); // Verifica a saúde do jogador
            } else {
                alert("Você se defendeu do ataque do inimigo!");
            }
        }
    });

    // Verifica se todos os inimigos foram derrotados
    checkAllEnemiesDefeated();
}

// Chama a função de ataque ao boss quando o jogador pressiona 'x' e enfrenta o boss
document.addEventListener('keydown', (event) => {
    if (event.key === 'x' && boss.style.display === 'block') {
        attackBoss(); // Ataca o boss
    }
});

// Atualiza a barra de saúde do jogador e inimigos
updateHealthBars(); // Chamada inicial para configurar as barras de saúde
