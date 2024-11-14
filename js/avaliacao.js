function updateFeedback(feedback) {
    document.getElementById('feedback-text').innerText = feedback;
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
  
  
  
  document.addEventListener('mousemove', (e) => {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.left = `${e.clientX}px`;
      pixel.style.top = `${e.clientY}px`;
      document.body.appendChild(pixel);
  
      // Remove o pixel após a animação
      setTimeout(() => {
          pixel.remove();
      }, 500); // Tempo para a bolinha sumir
  });






  const form = document.getElementById('form-feedback');
const feedbackInput = document.getElementById('feedback-input');
const feedbackList = document.getElementById('feedback-list');
const modal = document.getElementById('modal');
const editFeedbackInput = document.getElementById('edit-feedback-input');
const saveButton = document.getElementById('save-button');
const deleteButton = document.getElementById('delete-button');
const closeButton = document.querySelector('.close-button');

let feedbackArray = [];
let currentEditIndex = null;

function renderFeedback() {
    feedbackList.innerHTML = '';
    feedbackArray.forEach((feedback, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${feedback}</span>
            <div>
                <button class="form_button" onclick="openEditModal(${index})">Editar</button>
            </div>
        `;
        feedbackList.appendChild(li);
    });
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const feedbackText = feedbackInput.value.trim();
    if (feedbackText) {
        feedbackArray.push(feedbackText);
        feedbackInput.value = '';
        renderFeedback();
    }
});

function openEditModal(index) {
    currentEditIndex = index;
    editFeedbackInput.value = feedbackArray[index];
    modal.style.display = 'block';
}

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

saveButton.addEventListener('click', () => {
    const updatedFeedback = editFeedbackInput.value.trim();
    if (updatedFeedback) {
        feedbackArray[currentEditIndex] = updatedFeedback;
        modal.style.display = 'none';
        renderFeedback();
    }
});

deleteButton.addEventListener('click', () => {
    feedbackArray.splice(currentEditIndex, 1);
    modal.style.display = 'none';
    renderFeedback();
});

// Close modal when clicking outside of the modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
function updateFeedback(message) {
    const feedbackMessageElement = document.getElementById('feedback-message');
    feedbackMessageElement.textContent = message; // Atualiza o texto do feedback
}
