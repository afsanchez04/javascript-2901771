//string
let nombre = "pepe"
//array
let frutas = ["papaya",'manzana','naranja','limón','fresa']
//objeto
let persona = {
    nombre: 'jose',
    edad: 33,
    color: 'azul',
    saludar: function (){alert('Holaaa 👋')}//método
}

//Agregar elementos al local storage
localStorage.setItem('nombre',nombre)

localStorage.setItem('frutas', JSON.stringify(frutas) )
localStorage.setItem('persona',JSON.stringify(persona))


//Llamar información del local storage

let respuestaNombre = localStorage.getItem('nombre')
let respuestaFruta = JSON.parse( localStorage.getItem('frutas') )
let respuestaPersona = JSON.parse( localStorage.getItem('persona') ) 

console.log(respuestaNombre)
console.log(respuestaFruta)
console.log(respuestaPersona)

for (let i = 0; i < respuestaFruta.length; i++) {
    const element = respuestaFruta[i];
    console.log(`${i+1}. ${element} texto 🤖`)
    console.log((i+1) + ". " + element)
}

function eliminarItem(item){
    localStorage.removeItem(item)
}
eliminarItem('persona')

function borrarTodoLocal (){
    localStorage.clear()
}
borrarTodoLocal()

/* 
Resumen: 

1. localStorage.setItem('key','value')
    //Cuando reciba una clave y un valor, añadirá estos al localstorage.

2. JSON.stringify('key') 
    //Convierte string a array u objeto cuando se va a guardar en localStorage, se usa dentro del setItem

3. localStorage.getItem('key') 
    //Trae un elemento del localStorage

4. JSON.parse( 'key' ) 
    //Convierte string a array u objeto cuando se va a llamar un dato en localStorage se usa dentro del getItem

5. localStorage.removeItem( 'key' )
    //Elimina un elemento del localStorage

6. localStorage.clear()
    //Elimina todos los elementos del localStorage



*/