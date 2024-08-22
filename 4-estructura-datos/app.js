
//let cosas = ["uno","dos","tres","cuatro","cuarenta"]
const container = document.querySelector(".container")

peliculas.forEach(item => {

    //<div class="card"></div>
    let card = document.createElement('div');
    card.classList.add('card')

    card.innerHTML = `
            <img src="${item.image}" alt="">
            <div class="texto">
                <h1>${item.nombre}</h1>
                <p>${item.direccion}</p>
                <p>${item.year}</p>
                <p>${item.genero[0]}</p>
            </div>
    `
    container.appendChild(card) 
});















/* let pelicula = {
    nombre: "The Shining",
    year: 1980,
    director: "Stanley Kubrick",
    actores: ["Jack Nicholson", "Shelley Duvall","Danny Lloyd"],
    genero: ["Psychological Drama","Psychological Horror","Supernatural Horror","Horror"],
    guion: ["Stephen King", "Stanley Kubrick", "Diane Johnson"],
    duracion: 226,
    image: "https://images.justwatch.com/poster/129659342/s166/el-resplandor.webp"
}
//El nombre de la película es: The shining
console.log( "El nombre de la película es: " + pelicula.nombre )
//El genero de la película es Psychological Horror
console.log( pelicula.guion[5] )

for(let i = 0; i< pelicula.guion.length; i++){
    console.log(pelicula.guion[i])
}

 */