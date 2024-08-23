
const formRegistro = document.querySelector("#formRegistro")
const inputUserName = document.querySelector("#inputUserName")
const inputUserPass = document.querySelector("#inputUserPass")

function registroDatos (e){
    e.preventDefault()
    localStorage.setItem('user',inputUserName.value)
    localStorage.setItem('password',inputUserPass.value)

    const cajitaMensaje = document.createElement('p');
    cajitaMensaje.innerHTML = `Usuario registrado 😊, ya puedes <a href="../index.html">Iniciar sesión</a>`

    formRegistro.appendChild(cajitaMensaje)

    formRegistro.reset()
}
formRegistro.addEventListener('submit',registroDatos)