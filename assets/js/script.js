const formulario = document.querySelector('#form')
const inputsR = document.querySelector('.inputsR')
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i


let botao = document.querySelector('.botao')

function setError(index) {
    //inputsR[0].classList.add('ativo')
    inputsR[index].style.border = '2px solid red'
    spans[index].style.display = 'block'
}

function removeError(index) {
    inputsR[index].style.border = '2px solid blueviolet'
    spans[index].style.display = 'none'
}


function validarNome() {
    if(inputsR[0].value.length <= 3) {
        setError(0)
    } else {
        removeError(0)
    }
}

function validarEmail() {
    if(!emailRegex.test(inputsR[1].value)) {
        setError(1)
    } else {
        removeError(1)
    }
}

function validarSenha() {
    if(inputsR[2].value.length <= 8) {
        setError(2)
    } else {
        removeError(2)
        confirmarSenha()
    }
}

function confirmarSenha() {
    if(inputsR[3].value == inputsR[2].value && inputsR[3].value.length >= 8) {
        removeError(3)
    } else {
        setError(3)
    }
}

function verificarEnvio(event) {
    event.preventDefault()
    validarNome()
    validarEmail()
    validarSenha()
    confirmarSenha()
}

formulario.addEventListener('submit', verificarEnvio)


