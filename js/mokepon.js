let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

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
    let mascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAleatoria == 1) {
        // Hipodoge
        mascotaEnemigo.innerHTML = '¡HIPODOGE! 🔥'
    } else if(mascotaAleatoria == 2) {
        // Capipepo
        mascotaEnemigo.innerHTML = '¡CAPIPEPO! 💧'
    } else if(mascotaAleatoria == 3) {
        // Ratigueya
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
    ataqueAleatorio = aleatorio(1, 3)

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
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

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
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')

    sectionMensajes.innerHTML = resultadoFinal

    deshabilitarBotones()

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function deshabilitarBotones() {
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true

    let botonTierra = document.getElementById('boton-tierra')
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