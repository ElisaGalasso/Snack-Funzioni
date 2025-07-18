/* Scrivi una funzione che accetti un'array di stringhe e una lettera e 
restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function inizialiNomi(names) {
    let iniziali = []
    for (let i = 0; i < names.length; i++) {
        if (names [i][0] === "A")
            iniziali.push (names [i])
        }
        
    return iniziali
}


//function array

//const filtraIniziali = () => names.filter (names => names [0] === "A");
//console.log(filtraIniziali (names));


// Invoca la funzione qui e stampa il risultato in console

console.log(inizialiNomi(names));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]