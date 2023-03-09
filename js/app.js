const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.querySelector('body');

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (darkModeBtn.textContent === 'Dark') {
    darkModeBtn.textContent = 'Light';
  } else {
    darkModeBtn.textContent = 'Dark';
  }
});