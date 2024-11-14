// Mostra ou esconde o chat quando a bolinha é clicada e exibe as opções iniciais
document.getElementById('chat-button').addEventListener('click', function () {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer.style.display === 'none') {
        chatContainer.style.display = 'block';
        showInitialopcoes(); // Exibe as opções quando o chat é aberto
    } else {
        chatContainer.style.display = 'none';
    }
});

// Função para exibir opções iniciais assim que o chat é ativado
function showInitialopcoes() {
    const mensagem = 'Olá! Como posso te ajudar hoje? Clique em uma das opções abaixo:';
    const opcoes = ['📚 Cursos', '🎯 PORCOINS', '👥 Nossa equipe', '📞 Contato'];

    addMessage(mensagem, 'bot');

    opcoes.forEach(option => {
        addOptionButton(option);
    });
}

// Função para lidar com o clique em uma opção
function handleOptionClick(opcaotexto) {
    addMessage(opcaotexto, 'user'); // Adiciona a mensagem do usuário

    if (opcaotexto === '📚 Cursos') {
        showCursosOpcoes(); // Exibe as opções sobre os cursos
    } else if (opcaotexto === '🎯 PORCOINS') {
        showPorcoinsOpcoes(); // Exibe as opções sobre a PORCOINS
    } else if (opcaotexto === '👥 Nossa equipe') {
        showTeamopcoes(); // Mostra as opções da equipe
    } else if (opcaotexto === '📞 Contato') {
        showContatoOpcoes(); // Exibe as opções de contato
    } else if (opcaotexto === '📧 Email') {
        showEmail(); // Resposta para Email
    } else if (opcaotexto === '🔗 GitHub') {
        showGitHub(); // Resposta para GitHub
    } else if (opcaotexto === '💬 Discord') {
        showDiscord(); // Resposta para Discord
    } else if (opcaotexto === '📞 Telefone') {
        showTelefone(); // Resposta para Telefone
    } else if (opcaotexto === '⭐ Avaliação') {
        showAvaliacao(); // Resposta para Avaliação
    } else if (opcaotexto === 'Sobre') {
        showSobre(); // Resposta para "Sobre"
    } else if (opcaotexto === 'Contribuições') {
        showContribuicoes(); // Resposta para "Contribuições"
    } else if (opcaotexto === 'Nossa Inspiração') {
        showNossaInspiracao(); // Resposta para "Nossa Inspiração"
    } else if (opcaotexto === '📚 Cursos Disponíveis') {
        showCursosDisponiveis(); // Resposta para Cursos Disponíveis
    } else if (opcaotexto === '🔗 Links Úteis') {
        showLinksUteis(); // Resposta para Links Úteis
    } else if (opcaotexto === '📚 Apostilas') {
        showApostilas(); // Resposta para Apostilas
    } else if (opcaotexto === '🎥 Vídeos Extras') {
        showVideosExtras(); // Resposta para Vídeos Extras
    } else if (opcaotexto === '🔍 O que é a PORCOINS') {
        showOQueEAPORCOINS(); // Resposta para "O que é a PORCOINS"
    } else if (opcaotexto === '🎯 Qual a missão') {
        showQualAMissao(); // Resposta para "Qual a missão"
    } else if (opcaotexto === '💡 O que oferecemos') {
        showOQueOferecemos(); // Resposta para "O que oferecemos"
    } else if (opcaotexto === '📚 Nossa didática') {
        showNossaDidatica(); // Resposta para "Nossa didática"
    } else if (opcaotexto === 'Gustavo') {
        showGustavo(); // Resposta para Gustavo
    } else if (opcaotexto === 'Felipe') {
        showFelipe(); // Resposta para Felipe
    } else if (opcaotexto === 'Guilherme') {
        showGuilherme(); // Resposta para Guilherme
    } else if (opcaotexto === 'Pedro') {
        showPedro(); // Resposta para Pedro
    } else {
        const defaultMessage = 'Desculpe, não entendi sua solicitação.';
        setTimeout(() => addMessage(defaultMessage, 'bot'), 500);
    }
}

// Função para exibir as opções de contato
function showContatoOpcoes() {
    const contatomensagem = 'Escolha uma forma de contato:';
    const contatoopcoes = ['📧 Email', '🔗 GitHub', '💬 Discord', '📞 Telefone', '⭐ Avaliação'];

    addMessage(contatomensagem, 'bot');

    contatoopcoes.forEach(option => {
        addOptionButton(option); // Cria os botões de cada opção de contato
    });
}

// Funções de resposta para cada opção de contato
function showEmail() {
    const message = 'Você pode entrar em contato com o email de pedrobrito.hc@gmail.com';
    setTimeout(() => addMessage(message, 'bot'), 500);
}

function showGitHub() {
    const message = 'Visite nosso GitHub para mais detalhes sobre nossos projetos: https://github.com/PedroBrito0519/PORCOINS---Sempre-educando-seu-bolso';
    setTimeout(() => addMessage(message, 'bot'), 500);
}

function showDiscord() {
    const message = 'Junte-se ao nosso servidor no Discord para conversar com a nossa comunidade esta no github';
    setTimeout(() => addMessage(message, 'bot'), 500);
}

function showTelefone() {
    const message = 'Você pode entrar em contato pelo telefone: (11) 94315-7970';
    setTimeout(() => addMessage(message, 'bot'), 500);
}

function showAvaliacao() {
    const message = 'Gostaríamos de saber sua opinião! Por favor, deixe sua avaliação na pagina de contato';
    setTimeout(() => addMessage(message, 'bot'), 500);
}

// Função para exibir as opções sobre os cursos
function showCursosOpcoes() {
    const cursosMessage = 'Escolha uma das opções para saber mais sobre nossos cursos:';
    const cursosOpcoes = ['📚 Cursos Disponíveis', '🔗 Links Úteis', '📚 Apostilas', '🎥 Vídeos Extras'];

    addMessage(cursosMessage, 'bot');

    cursosOpcoes.forEach(option => {
        addOptionButton(option); // Cria os botões de cada opção sobre os cursos
    });
}

// Funções de resposta para as opções sobre cursos
function showCursosDisponiveis() {
    const message = 'Atualmente temos os seguintes cursos disponíveis: \n1. Educação Financeira para Iniciantes \n2. Investimentos para Profissionais \n3. Planejamento Financeiro Pessoal \n4. Estratégias Avançadas de Investimentos';
    setTimeout(() => addMessage(message, 'bot'), 500);
}

function showLinksUteis() {
    const message = 'Aqui estão alguns links úteis: \n- Link 1: https://www.caixa.gov.br/educacao-financeira/Paginas/default.aspx \n- Link 2: https://www.educamaisbrasil.com.br/enem/educacao-financeira';
    setTimeout(() => addMessage(message, 'bot'), 500);
}

function showApostilas() {
    const message = 'Confira nossas apostilas disponíveis para download no filtro de dados: ';
    setTimeout(() => addMessage(message, 'bot'), 500);
}

function showVideosExtras() {
    const message = 'Aqui estão alguns vídeos extras que podem ser úteis para você na pagina de cursos';
    setTimeout(() => addMessage(message, 'bot'), 500);
}

// Função para exibir as opções sobre PORCOINS
function showPorcoinsOpcoes() {
    const porcoinsMessage = 'Escolha uma das opções para saber mais sobre a PORCOINS:';
    const porcoinsOpcoes = ['🔍 O que é a PORCOINS', '🎯 Qual a missão', '💡 O que oferecemos', '📚 Nossa didática'];

    addMessage(porcoinsMessage, 'bot');

    porcoinsOpcoes.forEach(option => {
        addOptionButton(option); // Cria os botões de cada opção sobre PORCOINS
    });
}

// Funções de resposta para as opções sobre PORCOINS
function showOQueEAPORCOINS() {
    const message = 'A PORCOINS é uma plataforma dedicada ao ensino de educação financeira, com cursos e materiais para ajudá-lo a alcançar seus objetivos financeiros.';
    setTimeout(() => addMessage(message, 'bot'), 500);
}

function showQualAMissao() {
    const message = 'Nossa missão é capacitar as pessoas para atingirem a liberdade financeira através de conhecimentos práticos e acessíveis.';
    setTimeout(() => addMessage(message, 'bot'), 500);
}

function showOQueOferecemos() {
    const message = 'A PORCOINS oferece cursos, materiais educativos, consultorias e suporte para ajudar você a transformar sua vida financeira.';
    setTimeout(() => addMessage(message, 'bot'), 500);
}

function showNossaDidatica() {
    const message = 'Nossa didática é simples, prática e objetiva, com foco em exemplos reais e aplicações que você pode usar no seu dia a dia.';
    setTimeout(() => addMessage(message, 'bot'), 500);
}

// Funções para as opções de time
function showTeamopcoes() {
    const teamMessage = 'Aqui estão os membros da nossa equipe. Clique em um nome para saber mais:';
    const teamopcoes = ['Gustavo', 'Felipe', 'Guilherme', 'Pedro'];

    addMessage(teamMessage, 'bot');

    teamopcoes.forEach(option => {
        addOptionButton(option); // Cria os botões para cada membro da equipe
    });
}

// Respostas dos membros da equipe
function showGustavo() {
    const message = 'Meu nome é gustavo barros e estou cursando o primeuro ano do ensino medio tecnico na fiap school busco aprimorar minhas abilidades como programador e desenvolvedor front end pretendo em breve entrar no mercado de trabalho';
    setTimeout(() => addMessage(message, 'bot'), 500);
}

function showFelipe() {
    const message = 'Olá! Sou Felipe Oliveira, tenho 15 anos e sou um programador iniciante apaixonado por tecnologia. Comecei a aprender programação com HTML, CSS e JavaScript e adoro criar pequenos projetos, como jogos e sites. Estou sempre em busca de novos desafios e sonho em trabalhar em uma grande empresa de tecnologia no futuro!';
    setTimeout(() => addMessage(message, 'bot'), 500);
}

function showGuilherme() {
    const message = 'Meu nome é Guilherme Domingues e estou iniciando meus estudos na área de programação, focando tanto em front-end quanto em back-end. Tenho desenvolvido pequenos projetos de forma autônoma e busco constantemente evoluir minhas habilidades. Estou sempre em busca de aprender novas linguagens para aprimorar meu conhecimento e me desenvolver na área de programação.';
    setTimeout(() => addMessage(message, 'bot'), 500);
}

function showPedro() {
    const message = 'Meu nome é Pedro, Sou um desenvolvedor Front-end/Back-end iniciante, estudo na FIAP SCHOOL no 1 ano do ensino medio, busco a todo momento evoluir meu aprendizado e progredir cada vez mais em minha carreira como programador.';
    setTimeout(() => addMessage(message, 'bot'), 500);
}

// Função para enviar mensagem
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;  // Evita enviar mensagens vazias

    addMessage(userInput, 'user');
    document.getElementById('user-input').value = '';  // Limpa o campo de entrada

    // Responder com base no conteúdo do site
    const botResponse = generateResponse(userInput);
    setTimeout(() => addMessage(botResponse, 'bot'), 500); // Resposta do bot com pequeno atraso
}

// Função para adicionar mensagem ao chat
function addMessage(message, sender) {
    const chatBox = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;  // Mantém o chat rolado para a última mensagem
}

// Função para adicionar botões de opção no chat
function addOptionButton(opcaotexto) {
    const chatBox = document.getElementById('messages');
    const optionElement = document.createElement('div');
    optionElement.className = 'option-button';
    optionElement.textContent = opcaotexto;
    optionElement.addEventListener('click', () => handleOptionClick(opcaotexto)); // Define o evento de clique para a opção
    chatBox.appendChild(optionElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Mantém o chat rolado para a última mensagem
}

// Adiciona o evento de tecla Enter para enviar mensagem
document.getElementById('user-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
// Mostra ou esconde o chat quando a bolinha é clicada
document.getElementById('chat-button').addEventListener('click', function () {
    const chatContainer = document.getElementById('chat-container');
    const closeChatButton = document.getElementById('close-chat-button');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'block';
        closeChatButton.style.display = 'inline-block'; // Exibe o botão de fechar
        showInitialopcoes(); // Exibe as opções quando o chat é aberto
    } else {
        chatContainer.style.display = 'none';
        closeChatButton.style.display = 'none'; // Oculta o botão de fechar
    }
});

// Função para reiniciar o chat
function resetChat() {
    const messages = document.getElementById('messages');
    messages.innerHTML = ''; // Limpa as mensagens do chat
    showInitialopcoes(); // Exibe as opções iniciais novamente
}

// Função para fechar o chat
function closeChat() {
    const chatContainer = document.getElementById('chat-container');
    const closeChatButton = document.getElementById('close-chat-button');
    chatContainer.style.display = 'none'; // Esconde o chat
    closeChatButton.style.display = 'none'; // Esconde o botão de fechar
}
