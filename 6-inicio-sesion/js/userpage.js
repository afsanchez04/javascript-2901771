
const titulo = document.querySelector("#titulo")

if (localStorage.getItem('activo') == 'true') {
    function mostrarUsuario() {
        let user = localStorage.getItem('user')
        titulo.style.textTransform = 'capitalize'
        titulo.innerText = `Hola ${user} 🤖`
    }
    mostrarUsuario()
}else{
    window.location = "../index.html"
}

