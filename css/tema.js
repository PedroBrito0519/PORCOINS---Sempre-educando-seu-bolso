
        // Função para alternar o tema
        function toggleTheme() {
            var themeLink = document.getElementById('theme-style'); // Obtém o link do arquivo CSS
            var currentTheme = themeLink.getAttribute('href'); // Verifica qual arquivo CSS está sendo usado

            // Se o tema atual for o escuro, troca para o tema claro
            if (currentTheme === 'css/style.css') {
                themeLink.setAttribute('href', 'css/style-claro.css'); // Aponta para o CSS do tema claro
                document.querySelector('.theme-toggle-btn button').innerHTML = "🌙"; // Ícone de lua (para tema escuro)
                document.querySelector('.theme-toggle-btn button').setAttribute('data-tooltip', 'Tema Escuro'); // Tooltip para "Tema Escuro"
                document.body.classList.add('dark-theme'); // Adiciona a classe dark-theme
                localStorage.setItem('theme', 'light'); // Armazena o tema claro no localStorage
            } else {
                themeLink.setAttribute('href', 'css/style.css'); // Aponta para o CSS do tema escuro
                document.querySelector('.theme-toggle-btn button').innerHTML = "🌞"; // Ícone de sol (para tema claro)
                document.querySelector('.theme-toggle-btn button').setAttribute('data-tooltip', 'Tema Claro'); // Tooltip para "Tema Claro"
                document.body.classList.remove('dark-theme'); // Remove a classe dark-theme
                localStorage.setItem('theme', 'dark'); // Armazena o tema escuro no localStorage
            }
        }

        // Função para carregar o tema ao iniciar a página
        function loadTheme() {
            const savedTheme = localStorage.getItem('theme'); // Verifica se existe um tema salvo

            // Carrega o tema salvo (claro ou escuro)
            if (savedTheme === 'light') {
                document.getElementById('theme-style').setAttribute('href', 'css/style-claro.css');
                document.querySelector('.theme-toggle-btn button').innerHTML = "🌙";
                document.querySelector('.theme-toggle-btn button').setAttribute('data-tooltip', 'Tema Escuro');
                document.body.classList.add('dark-theme');
            } else {
                document.getElementById('theme-style').setAttribute('href', 'css/style.css');
                document.querySelector('.theme-toggle-btn button').innerHTML = "🌞";
                document.querySelector('.theme-toggle-btn button').setAttribute('data-tooltip', 'Tema Claro');
                document.body.classList.remove('dark-theme');
            }
        }

        // Carrega o tema ao iniciar a página
        loadTheme();
// Função para alternar o tema de sobrecursos
function toggleSobrecursoTheme() {
    var sobrecursoLink = document.getElementById('sobrecurso-style'); // Obtém o link do arquivo CSS de sobrecurso
    var currentSobrecursoTheme = sobrecursoLink.getAttribute('href'); // Verifica qual arquivo CSS está sendo usado

    // Se o tema atual for o escuro, troca para o tema claro
    if (currentSobrecursoTheme === 'css/sobrecurso.css') {
        sobrecursoLink.setAttribute('href', 'css/sobrecurso-claro.css'); // Aponta para o CSS do tema claro
        document.querySelector('.theme-toggle-btn button').innerHTML = "🌙"; // Ícone de lua (para tema escuro)
        document.querySelector('.theme-toggle-btn button').setAttribute('data-tooltip', 'Tema Escuro'); // Tooltip para "Tema Escuro"
        document.body.classList.add('dark-theme'); // Adiciona a classe dark-theme
        localStorage.setItem('sobrecurso-theme', 'light'); // Armazena o tema claro no localStorage
    } else {
        sobrecursoLink.setAttribute('href', 'css/sobrecurso.css'); // Aponta para o CSS do tema escuro
        document.querySelector('.theme-toggle-btn button').innerHTML = "🌞"; // Ícone de sol (para tema claro)
        document.querySelector('.theme-toggle-btn button').setAttribute('data-tooltip', 'Tema Claro'); // Tooltip para "Tema Claro"
        document.body.classList.remove('dark-theme'); // Remove a classe dark-theme
        localStorage.setItem('sobrecurso-theme', 'dark'); // Armazena o tema escuro no localStorage
    }
}

// Função para carregar o tema de sobrecursos ao iniciar a página
function loadSobrecursoTheme() {
    const savedSobrecursoTheme = localStorage.getItem('sobrecurso-theme'); // Verifica se existe um tema salvo para sobrecurso

    // Carrega o tema salvo (claro ou escuro) para sobrecurso
    if (savedSobrecursoTheme === 'light') {
        document.getElementById('sobrecurso-style').setAttribute('href', 'css/sobrecurso-claro.css');
        document.querySelector('.theme-toggle-btn button').innerHTML = "🌙";
        document.querySelector('.theme-toggle-btn button').setAttribute('data-tooltip', 'Tema Escuro');
        document.body.classList.add('dark-theme');
    } else {
        document.getElementById('sobrecurso-style').setAttribute('href', 'css/sobrecurso.css');
        document.querySelector('.theme-toggle-btn button').innerHTML = "🌞";
        document.querySelector('.theme-toggle-btn button').setAttribute('data-tooltip', 'Tema Claro');
        document.body.classList.remove('dark-theme');
    }
}

// Carrega o tema ao iniciar a página
loadSobrecursoTheme();
