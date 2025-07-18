/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array 
con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function prendiIniziali (names) {
    let iniziali = []
    for (let i= 0; i < names.length; i++) {
        iniziali.push (names[i] [0]);
    }
    return iniziali
}


//function arrow

//const prendiIniziali = (names) => names.map (names => names [0])

// Invoca la funzione qui e stampa il risultato in console

console.log(prendiIniziali(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]