/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function contaVocali (word) {
    let conteggio = 0
    let vocali = []
    for (let i = 0; i < word.length; i++) {
        const lettera = word [i]
        if (lettera === "a" ||
            lettera === "e" ||
            lettera === "i" ||
            lettera === "o" ||
            lettera === "u" ) {
            
            conteggio++;
            vocali.push (lettera)
        }

    }

    return {conteggio, vocali: vocali.join (", ")}
}


// Invoca la funzione qui e stampa il risultato in console

console.log(contaVocali (word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
