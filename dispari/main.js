// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Poi generiamo un numero random (sempre da 1 a 5)
// per il computer e dichiariamo chi ha vinto.
// (Quindi classico gioco pari o dispari dove utente sceglie a priori se uscirà pari
// o dipsari e poi dichiara un numero (tra 1 e 5) .
// Il computer genera random altro numero sullo stesso range,
// così sapremo chi ha vinto.


//scelta utente pari o dispari
var scelta=prompt('pari o dispari?', 'pari/dispari');
//scleta numero
var numero=parseInt(prompt('scegli un numero da 1 a 5', '1/5'));
//computer
var cpu=Math.floor(Math.random()*5)+1; //+1 perchè parte a generare da 0
alert(cpu);
//somma per capire vincitore
var somma=numero+cpu;
//logica
if (somma%2==0 && scelta=='pari') {  //%2==0 <--- PARI    %2==1<--- DISPARI
  //(somma%2==0 && scelta=='pari')||(somma%2==1 && scelta=='dispari') <---con utilizzo OR (||)
  alert('hai vinto');
} else if (somma%2==1 && scelta=='dispari'){
  alert('hai vinto');
  }else {
    alert('hai perso');
}
