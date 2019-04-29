// Capire se la parola inserita dall’utente è palindroma o no
// (e quindi output di conseguenza)


//ESERCIZIO CON spit/reverse/join
// //chiedere all'utente parola
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
//controllo la parola
for (var i = parola.length-1; i >= 0; i--) {
  str+=parola.charAt(i);
  console.log(parola[i]);
}
//logica
if (parola==str) {
  alert('la parola è palindroma');
} else {
  alert('la parola non è palindroma');
}
