
//BONUS DIFFICOLTA' GIOCO richiamo la funzione principale


//variabili
var punteggio = 0
var bfacile = document.getElementById("facile");
var bmedio = document.getElementById("medio");
var bdifficile = document.getElementById("difficile");
var breset = document.getElementById("reset");
var stampa1 = "";

//DIFFICOLTA' GIOCO FACILE
bfacile.addEventListener ("click",
function()
{
  alert('HAI 84 tentativi per battermi');
  campoMinato(16, 100);
  document.getElementById("stampa1").innerHTML = stampa1;
}
);

//DIFFICOLTA' GIOCO MEDIA
bmedio.addEventListener("click",
function()
{
  alert('HAI 64 tentativi per battermi');
  campoMinato(16, 80);
  document.getElementById("stampa1").innerHTML = stampa1;
}
);

//DIFFICOLTA' GIOCO DIFFICILE
bdifficile.addEventListener("click",
function()
{
  alert('HAI 34 tentativi per battermi');
  campoMinato(16, 50);
  document.getElementById("stampa1").innerHTML = stampa1;
}
);


//RESET GAME
breset.addEventListener("click",
function sampleFunction() {
  location.reload();
}
);
