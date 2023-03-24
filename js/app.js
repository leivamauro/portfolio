const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.querySelector('body');
const switchBtn = document.getElementById('dark-mode-btn');

let darkMode = true;

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (darkMode) {
    switchBtn.style = 'display: flex; justify-content: end; background-color: #ffffffb3;';
    darkMode = false;
  } else {
    switchBtn.style = 'display: flex; justify-content: start; background-color: #132029b3;';
    darkMode = true;
  }
});

