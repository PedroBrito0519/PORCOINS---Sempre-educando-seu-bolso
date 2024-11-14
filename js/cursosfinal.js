const videoBtns = document.querySelectorAll('.video-btn');
const modal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');
const closeModal = document.querySelector('.close');
const iframe = document.createElement('iframe');

videoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const videoSrc = btn.getAttribute('data-video');
        
        // Verifica se é um link do YouTube
        if (videoSrc.includes('youtube.com')) {
            iframe.src = videoSrc.replace('watch?v=', 'embed/');
            iframe.width = '560';
            iframe.height = '315';
            iframe.frameBorder = '0';
            iframe.allowFullscreen = true;
            videoPlayer.innerHTML = ''; // Limpa o conteúdo atual
            videoPlayer.appendChild(iframe); // Adiciona o iframe
        } else {
            videoSource.src = videoSrc; // Para MP4 ou outros formatos
            videoPlayer.load();
        }

        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe); // Remove o iframe se estiver presente
    } else {
        videoPlayer.pause();
        videoSource.src = ''; // Limpa a fonte do vídeo
        videoPlayer.load();
    }
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        if (iframe.parentNode) {
            iframe.parentNode.removeChild(iframe); // Remove o iframe se estiver presente
        } else {
            videoPlayer.pause();
            videoSource.src = '';
            videoPlayer.load();
        }
    }
});

// Redireciona quando estiver offline
window.addEventListener('offline', function() {
    window.location.href = 'error.html';
});

function reportError() {
    alert('Erro reportado com sucesso!'); // Simulação de envio
}
