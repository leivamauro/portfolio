


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

escribir('Sobre mi', "about_me_title");
escribir('Proyectos Academicos', "portfolio_title");
escribir('Habilidades Tecnicas', "skills_title");
escribir('Mis estudios', "studies_title");

// ---- FUNCION efecto de escribir ----
function escribir(textoAEscribir, elementoID) {

    let texto = document.getElementById(elementoID);
    let arrayCaracteres = textoAEscribir.split('');
    let indice = 0;

    const intervalID = setInterval(() => {    
        
        if (indice >= arrayCaracteres.length) {
            
            clearInterval(intervalID);
            setTimeout(() => {//se espera un tiempo de 3 seg para entrar a limpiar el arreglo y llamar la recursividad
                texto.textContent = '';
                escribir(textoAEscribir, elementoID);
            }, 2500);

        } else {  
            texto.textContent += arrayCaracteres[indice];
            indice++;
        }

    }, 200); // 1000ms = 1s 
}
