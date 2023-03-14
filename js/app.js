const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.querySelector('body');

var darkMode = true;

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (darkMode) {
    darkModeBtn.classList.remove('moon-mode-btn');
    darkModeBtn.classList.toggle('sun-mode-btn');
    darkMode = false;
  } else {
    darkModeBtn.classList.remove('sun-mode-btn');
    darkModeBtn.classList.toggle('moon-mode-btn');
    darkMode = true;
  }
});
