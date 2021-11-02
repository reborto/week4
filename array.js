
// = []; crea array vuoto - sintassi
const names = ["mickey", "donald", "goofy"];

// console.log(names); stampa tutto
//console.log(0); stampa il primo elemento - mickey

console.log(names[0]);
console.log(names.length); //ritorna la lunghezza - sintassi

console.log=(names[0]); //con "=" in scrittura; senza, in lettura

//names[5]= "reborto"
//crea dei posti vuoti "undefined" fino al posto 5 
 
names.concat(["rick"]); //aggiunge l'array senza cancellare il vecchio
const newNames = names.concat(["rick"]); //metodo per salvare il risultato


//cicli

//forEach è già pronto, 
names.forEach(()=>{
    console.log(element, index);
})