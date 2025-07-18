/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const userName = "Mario";

// Dichiara la funzione qui.

const greetUser = (name) => {
  const now = new Date().getHours();

  let msg;
  if (now >= 0 && now < 13) {
    msg = "Buongiorno";
  } else if (now >= 13 && now < 17) {
    msg = "Buon pomeriggio";
  } else {
    msg = "Buonasera";
  }

  return `${msg} ${name}!`;
};

// Invoca la funzione qui e stampa il risultato in console

console.log(greetUser(userName));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
