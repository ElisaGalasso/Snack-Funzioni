/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
let orario = "18:00"

// Dichiara la funzione qui.

function salutoUtente (name, orario) {
    if (orario < "13:00") {
        return`Buongiorno ${name}`;

    } else if (orario < "17:00" ){
        return `Buon pomeriggio ${name}`
    
    } else {
        return `Buonasera ${name}`

    }
    
}


// Invoca la funzione qui e stampa il risultato in console

console.log(salutoUtente (name, orario));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.