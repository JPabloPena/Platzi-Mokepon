const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
 const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const mascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'

    sectionReiniciar.style.display = 'none'

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = '¡HIPODOGE! 🔥'
    } else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = '¡CAPIPEPO! 💧'
    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = '¡RATIGUEYA! 🌿'
    } else {
        alert('¡No has elegido a ninguna mascota! 😥')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)

    if(mascotaAleatoria == 1) {
        mascotaEnemigo.innerHTML = '¡HIPODOGE! 🔥'
    } else if(mascotaAleatoria == 2) {
        mascotaEnemigo.innerHTML = '¡CAPIPEPO! 💧'
    } else if(mascotaAleatoria == 3) {
        mascotaEnemigo.innerHTML = '¡RATIGUEYA! 🌿'
    }
}

function ataqueFuego() {
    ataqueJugador = '¡FUEGO! 🔥'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = '¡AGUA! 💧'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = '¡TIERRA! 🌿'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = '¡FUEGO! 🔥'
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = '¡AGUA! 💧'
    } else if(ataqueAleatorio == 3) {
        ataqueEnemigo = '¡TIERRA! 🌿'
    }

    combate()
}

function combate() {
    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("¡EMPATE!")
    } else if(ataqueJugador == "¡FUEGO! 🔥" && ataqueEnemigo == "¡TIERRA! 🌿") {
        crearMensaje("¡GANASTE!")
        spanVidasEnemigo.innerHTML = --vidasEnemigo
    } else if(ataqueJugador == "¡AGUA! 💧" && ataqueEnemigo == "¡FUEGO! 🔥") {
        crearMensaje("¡GANASTE!")
        spanVidasEnemigo.innerHTML = --vidasEnemigo
    } else if(ataqueJugador == "¡TIERRA! 🌿" && ataqueEnemigo == "¡AGUA! 💧") {
        crearMensaje("¡GANASTE!")
        spanVidasEnemigo.innerHTML = --vidasEnemigo
    } else {
        crearMensaje("¡PERDISTE!")
        spanVidasJugador.innerHTML = --vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if(vidasEnemigo == 0) {
        crearMensajeFinal('Felicitaciones... ¡GANASTE! 🥳')
    } else if(vidasJugador == 0) {
        crearMensajeFinal('Lo siento... ¡PERDISTE! 😥')
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal

    deshabilitarBotones()

    sectionReiniciar.style.display = 'block'
}

function deshabilitarBotones() {
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
}

function reiniciarJuego() {
    location.reload()
}

// Retorna un número aleatorio
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min)
}

// Carga el script una vez haya cargado todo el HTML
window.addEventListener('load', iniciarJuego)