const listaColores = document.querySelector('#listaColores')
const btnCrear = document.querySelector('#btnCrear')
const btnBorrar = document.querySelector('#btnBorrar')
const main = document.querySelector('.main')
let num = 1;

function crear (){

    let pelota = document.createElement('div')  
    pelota.classList.add('pelota');
    pelota.innerHTML = `
        <div class="equis">x</div>
        <span>${num++}</span>
    ` 
    pelota.style.backgroundColor = listaColores.value;

    main.appendChild(pelota);
}

function borrarTodo(){
    main.innerHTML = "";
    num = 1;
}

function borrarPelotica (e){
    if(e.target.innerText === 'x'){
        let papa = e.target.parentElement.remove()
        console.log(papa)
        if(main.children.length === 0){
            num=1;
            e.target.style.textDecoration = 'none';
        }
    }
}

function tachar (e){
    e.target.style.textDecoration = 'line-through';
}

btnCrear.addEventListener('click',crear);
btnBorrar.addEventListener('click',borrarTodo)
main.addEventListener('click',borrarPelotica)
main.addEventListener('click',tachar)