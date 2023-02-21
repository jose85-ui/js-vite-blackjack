
/**
 * Esta funcion me permite sacar una carta del deck
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} devuelve la carta del deck
 */

// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {
 
    if ( !deck || deck.length === 0 ) {
        throw new 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}