/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

function numOfVocals(word) {
  const vocals = ["a", "e", "i", "o", "u"];
  const newArr = [];
  for (let i = 0; i < word.length; i++) {
    if (vocals.includes(word.charAt(i))) {
      newArr.push(word.charAt(i));
    }
  }

  return newArr;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(numOfVocals(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
