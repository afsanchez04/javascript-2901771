/* 1. Variables */
const btnPlay = document.querySelector('.btn-play');
const sol = document.querySelector('.sol');
const audio = document.querySelector('#camaMusical');

let e = 0;
/* 2. Funciones */
function animar (){
    if(e == 0){
        audio.play();
        sol.style.animationName = 'solmove'; 
        sol.style.animationPlayState = 'running';  
        e = 1;
    }else{
        audio.pause();
        sol.style.animationPlayState = 'paused';  
        e = 0;
    } 
}

/* 3. Eventos */
btnPlay.addEventListener('click',animar)