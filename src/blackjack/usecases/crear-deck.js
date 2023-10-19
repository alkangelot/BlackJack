import _ from 'underscore';


/**
 * esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta Ejemplo ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo ['A','J','Q','K']
 * @returns {Array<string>} retorna un nuevo arreglo de cartas
 */

export const crearDeck = (tiposDeCarta,tiposEspeciales) => {

    let deck = [];
    if(!tiposDeCarta) throw new Error('tipo de carta es obligatorio')
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// importacion por defecto
// export default crearDeck;