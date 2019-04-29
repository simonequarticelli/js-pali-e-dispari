// Capire se la parola inserita dall’utente è palindroma o no
// (e quindi output di conseguenza)


//ESERCIZIO CON split('')/reverse()/join('')
// .split('') <--- craa 'array' (divide una stringa in una matrice di sottostringhe)
// .reverse() <---inverte array
// .join('')<--- unisce elementi array in stringa
//chiedere all'utente parola
// var parola=prompt('inserisci parola', 'parola');
// //controllare se la parola inserita è palindroma
// if (parola.split('').reverse().join('')==parola) {
//   //confermare se lo è o no
//   alert('la parola è palindroma');
// }else {
//   alert('la parola non è palindroma');
// }


//ESERCIZIO CON CICLO FOR
//chiedere all'utente parola
var parola=prompt('inserisci parola', 'parola');
//creo var vuota
var str='';
//controllo la parola al contrario
// for (var i = 0; i < parola.length; i++) { //CICLO NORMALE
for (var i = parola.length-1; i >= 0; i--) { //CICLO CONTRARIO
  console.log(i);
  str+=parola.charAt(i); //+= <---FORMA ABBREVIATA DI str=str+parola.charAt(i);
  console.log(parola[i]);
}
//logica
if (parola==str) {
  alert('la parola è palindroma');
} else {
  alert('la parola non è palindroma');
}
