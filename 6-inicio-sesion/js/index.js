
const formRegistro = document.querySelector("#formRegistro")
const inputUserName = document.querySelector("#inputUserName")
const inputUserPass = document.querySelector("#inputUserPass")

function validarUsuario (e){
    e.preventDefault()
    
    let usuarioLocal = localStorage.getItem('user')
    let passwordLocal = localStorage.getItem('password')

    if(usuarioLocal === inputUserName.value && passwordLocal === inputUserPass.value){
        console.log('Bienvenido 😎')
        window.location = "././vistas/userpage.html"
        //document.location.href = ".//vistas/userpage.html"
    }else{
        console.log('Datos incorrectos 🫠')
    }
    

    formRegistro.reset()
}
formRegistro.addEventListener('submit',validarUsuario)