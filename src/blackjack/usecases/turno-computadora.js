import { valorCarta } from "./valor-carta"
import {pedirCarta,crearCartaHTML} from './'


// turno de la computadora
export const turnoComputadora = (puntosMinimos,puntosHTML,divCartasComputadora,deck = []) => {

    if(!puntosMinimos) throw new Error('puntos minimos son nesesario')

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

       // todo: crear carta
       const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}