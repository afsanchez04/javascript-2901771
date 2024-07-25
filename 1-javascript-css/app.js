/* 1. Variables */
const btnPlay = document.querySelector('.btn-play');
const sol = document.querySelector('.sol');

console.log(btnPlay)

/* 2. Funciones */
function animar (){
    sol.style.backgroundColor = 'black';
}

/* 3. Eventos */
btnPlay.addEventListener('click',animar)