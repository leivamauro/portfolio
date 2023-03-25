/* CONFIGURACION MODO OSCURO -- INICIO */
const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.querySelector('body');
const switchBtn = document.getElementById('dark-mode-btn');

let darkMode = true;

if (darkMode) {    
  darkMode = false;
} else {
  darkMode = true;
} 

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
/* CONFIGURACION MODO OSCURO -- FIN */

