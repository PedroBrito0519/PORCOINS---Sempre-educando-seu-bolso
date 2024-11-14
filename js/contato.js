function cadastrar() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let sobrenome = document.getElementById('sobrenome').value; 
    let telefone = document.getElementById('telefone').value;
    let mensagem = document.getElementById('mensagem').value; 

    // Verificação de campos
    if (!nome || !sobrenome || !telefone || !email || !mensagem) {
        alert('O campo não pode estar vazio.');
        return;
    } 
    if (nome.length < 2) {
        alert('Informação inválida, faça novamente.');
        return;
    } 

    // Mensagem de sucesso
    alert(`Cadastro efetuado com sucesso!\n\nNome: ${nome}\nSobrenome: ${sobrenome}\nTelefone: ${telefone}\nEmail: ${email}`);
    window.location.href = 'cursos.html'; // Redireciona após o cadastro
}
const glowEffect = document.createElement('div');
glowEffect.className = 'glow-effect';
document.body.appendChild(glowEffect);

document.addEventListener('mousemove', (event) => {
    glowEffect.style.left = `${event.pageX - 50}px`; // Centraliza o brilho
    glowEffect.style.top = `${event.pageY - 50}px`; // Centraliza o brilho
    glowEffect.style.opacity = '50'; // Torna o brilho visível

    // Após 0.2 segundos, remove a opacidade
    setTimeout(() => {
        glowEffect.style.opacity = '0'; 
    }, 200);
});

//ERRP DE WIFI
window.addEventListener('offline', function() {
    window.location.href = 'error.html'; // Redireciona quando estiver offline
});
function reportError() {
           
    alert('Erro reportado com sucesso!'); // Simulação de envio
}

