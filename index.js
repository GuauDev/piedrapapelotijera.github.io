var resultado
var puntosJugador=0
var puntosPc=0
var ataqueJugador
var ataqueEnemigo
const tarjeta=document.getElementById('tarjeta')
const spanPuntajeJugador=document.getElementById('puntaje-jugador')
const spanPuntajeEnemigo=document.getElementById('puntaje-enemigo')
const spanResultado=document.getElementById('resultado')
const spanAtaqueJugador=document.getElementById('ataque-jugador')
const spanAtaqueEnemigo=document.getElementById('ataque-enemigo')
function mostrarTarjeta(jugador,enemigo) {
    tarjeta.style.display='flex'
    spanPuntajeJugador.innerHTML=puntosJugador
    spanPuntajeEnemigo.innerHTML=puntosPc
    spanResultado.innerHTML=resultado
    spanAtaqueJugador.innerHTML=jugador
    spanAtaqueEnemigo.innerHTML=enemigo
}
function convertirALetras(ataque){
    switch (ataque) {
        case 1:
            return 'piedra'
            break;
        case 2:
            return 'papel'
            break;
        case 3:
            return 'tijera'
            break;
    }
} 

function piedra() {
    combate(1)
}

function papel() {
    combate(2)
}

function tijera() {
    combate(3)
}

function ok() {
    tarjeta.style.display='none'
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function combate(ataque) {
    let jugador = ataque
    let enemigo = aleatorio(1,3)
    switch (enemigo) {
        case 1:
            switch (jugador) {
                case 1:
                    resultado='empate'
                    break
                case 2:
                    resultado='ganaste :)'
                    puntosJugador++
                    break
                case 3:
                    resultado='perdiste :('
                    puntosPc++
                    break
            }
            break

        case 2:
            switch(jugador){
                case 1:
                    resultado='perdiste :('
                    puntosPc++
                    break

                case 2:
                    resultado='empate'
                    break

                case 3: 
                    resultado='ganaste :)'
                    puntosJugador++
                    break

            }
            break

        case 3:
            switch(jugador){
                case 1:
                    resultado='ganaste :)'
                    puntosJugador++
                    break

                case 2:
                    resultado='perdiste :('
                    puntosPc++
                    break

                case 3: 
                resultado='empate'
                    break
            }
            break
    }
    ataqueJugador=convertirALetras(jugador)
    ataqueEnemigo=convertirALetras(enemigo)
    mostrarTarjeta(ataqueJugador,ataqueEnemigo )
}