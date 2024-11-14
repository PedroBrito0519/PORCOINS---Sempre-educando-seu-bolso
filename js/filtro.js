document.getElementById('filterForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Previne o envio do formulário para evitar o recarregamento da página

    const option = document.getElementById('option').value;  // Captura o valor selecionado

    if (option) {
        document.getElementById('filterForm').style.display = 'none';  // Esconde o formulário

        // Se a opção for "Ver Materiais" ou "Acessar Links Úteis", redireciona automaticamente
        if (option === "materiais.html" || option === "links.html") {
            window.location.href = option;  // Redireciona para a página selecionada
        } else {
            showNextQuestion();  // Se for "Cursos Disponíveis", mostra as perguntas
        }
    } else {
        alert('Por favor, selecione uma opção.');  // Caso nenhuma opção seja selecionada
    }
});

// Variável global para armazenar as respostas do usuário
let userResponses = {
    subject: '',
    experience: ''
};

// Função para mostrar a pergunta sobre o que o usuário pretende aprender
function showNextQuestion() {
    const questionContainer = document.createElement('div');
    questionContainer.className = 'container_filtro'; 
    document.body.appendChild(questionContainer);

    let questionText = 'O que você pretende aprender sobre Educação Financeira?';
    let nextOptions = 'Finanças Pessoais, Orçamento Familiar, Investimentos, Gastos Conscientes';

    questionContainer.innerHTML = `
        <h1>${questionText}</h1>
        <label for="nextOption">Escolha uma opção:</label>
        <select id="nextOption">
            <option value="">Selecione</option>
            ${nextOptions.split(', ').map(option => `<option value="${option}">${option}</option>`).join('')}
        </select>
        <button id="submitResponse">Enviar Resposta</button>
    `;

    document.getElementById('submitResponse').addEventListener('click', function () {
        const selectedNextOption = document.getElementById('nextOption').value;

        if (selectedNextOption) {
            questionContainer.style.display = 'none';  // Esconde a pergunta
            userResponses.subject = selectedNextOption;  // Armazena a resposta
            showExperienceQuestion();  // Exibe a próxima pergunta
        } else {
            alert('Por favor, selecione uma opção.');
        }
    });
}

// Função para mostrar a pergunta sobre o nível de experiência
function showExperienceQuestion() {
    const questionContainer = document.createElement('div');
    questionContainer.className = 'container_filtro';
    document.body.appendChild(questionContainer);

    let questionText = 'Qual é o seu nível de experiência?';
    let nextOptions = 'Iniciante, Médio, Alto';

    questionContainer.innerHTML = `
        <h1>${questionText}</h1>
        <label for="experienceOption">Escolha uma opção:</label>
        <select id="experienceOption">
            <option value="">Selecione</option>
            ${nextOptions.split(', ').map(option => `<option value="${option}">${option}</option>`).join('')}
        </select>
        <button id="submitExperienceResponse">Enviar Resposta</button>
    `;

    document.getElementById('submitExperienceResponse').addEventListener('click', function () {
        const selectedExperienceOption = document.getElementById('experienceOption').value;

        if (selectedExperienceOption) {
            questionContainer.style.display = 'none';  // Esconde a pergunta
            userResponses.experience = selectedExperienceOption;  // Armazena a resposta
            displayCourseOption();  // Exibe a opção de curso
        } else {
            alert('Por favor, selecione uma opção.');
        }
    });
}

// Função para mostrar a opção do curso, de acordo com o assunto escolhido
function displayCourseOption() {
    const courseContainer = document.createElement('div');
    courseContainer.className = 'container_filtro';
    document.body.appendChild(courseContainer);

    let courseLink = '';
    let courseName = '';

    switch (userResponses.subject) {
        case 'Finanças Pessoais':
            courseLink = 'Financias.html';
            courseName = 'Finanças Pessoais';
            break;
        case 'Orçamento Familiar':
            courseLink = 'Orcamento.html';
            courseName = 'Orçamento Familiar';
            break;
        case 'Investimentos':
            courseLink = 'Investimento.html';
            courseName = 'Investimentos';
            break;
        case 'Gastos Conscientes':
            courseLink = 'Gastos.html';
            courseName = 'Gastos Conscientes';
            break;
        default:
            courseName = 'Curso Indisponível';
            break;
    }

    courseContainer.innerHTML = `
        <h1>Você será direcionado para:</h1>
        <p><a href="${courseLink}" target="_blank">${courseName}</a></p>
        <button id="finish">Concluir</button>
    `;

    document.getElementById('finish').addEventListener('click', function () {
        alert('Obrigado por participar! Você será redirecionado para o curso.');
        window.location.href = courseLink;  // Redireciona para o link do curso
    });
}
