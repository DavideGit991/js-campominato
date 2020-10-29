// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// var numBombe = 16;
// var possibilitàUte = 100;

var arrayNumBombe=[];
var arrayNumUte=[];
var punteggio = 0
var bfacile = document.getElementById("facile");
var bmedio = document.getElementById("medio");
var bdifficile = document.getElementById("difficile");
var breset = document.getElementById("reset");

var stampa1 = "";
var stampa2 = "";

//genero 16 numeri diversi random tra 1 e 100 e li inserisco in un array
while(arrayNumBombe.length < 16)
{
   var n = randomNum(100);
   if (arrayNumBombe.indexOf(n) == -1)
   {
    arrayNumBombe.push(n);

    //stampo a video gli elementi randomici
    stampa1 += "<li>" + n + "</li>";
   }

}
  console.log(arrayNumBombe);

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
  //funzioni

  //numero random
  function randomNum(num)
  {
    return Math.floor(Math.random()*num)+1;
  }

  //CAMPOMINATO con controlli in input dati utente
  function campoMinato(numBombe, possibilitàUte)
  {

    var tentativi = possibilitàUte - numBombe;
    //chiedo all'utente di inserire un numero 100-16 volte
    for(i=1; i<=tentativi; i++)
    {
     var numeroUte = parseInt(prompt("inserisci un numero per il campo minato da 1 a 100"));

      //controllo sul dato inserito dall'utente
      // se e' >100
      // inserisce un NAN
      // inserisce una stringa
      // inserisce gia' un numero da lui precedentemente inserito
      // allore abbasso il contatore e stampo un allert
      if(numeroUte > 100 || isNaN(numeroUte) || Number.isNaN(numeroUte) || arrayNumUte.includes(numeroUte) )
      {
       alert('ATTENZIONE! inserisci un valore valido compreso tra 1 e 100');
       i--;

      }

      //lo confronto con il mio array di bombe
        //se non c'è e finisco il massimo numero di tentativi pusho in un arraynumeri utente e punteggio++ e l'utente ha vinto
      else if (arrayNumBombe.indexOf(numeroUte) == -1 && (arrayNumUte.length + 1) == tentativi )
      {
          punteggio += 1;
          arrayNumUte.push(numeroUte);
          console.log(numeroUte);
          console.log("hai VINTO ed hai totalizzato: ", punteggio , "punti" );
          document.getElementById("punteggio").innerHTML = punteggio;
          document.getElementById("esito").innerHTML = "<h5 class='blu'>" + "HAI VINTO CON IL MAX PUNTEGGIO" + "</h5>";
          alert('HAI VINTO E HAI TOT IL MAX PUNTEGGIO');
          stampa2 +=  "<li>" + numeroUte + "</li>" ;
          document.getElementById("stampa2").innerHTML = stampa2;

      }

        //se non c'è pusho in un arraynumeri utente e punteggio++
      else if (arrayNumBombe.indexOf(numeroUte) == -1)
      {
          punteggio += 1;
          arrayNumUte.push(numeroUte);
          console.log(numeroUte);
          console.log("Punteggio parziale: ", punteggio);
          document.getElementById("punteggio").innerHTML = punteggio;
          stampa2 +=  "<li>" + numeroUte + "</li>" ;
          document.getElementById("stampa2").innerHTML = stampa2;
      }

        //se c'è gioco finito e stampo quanti punti o "giri" l'utente ha fatto e gli dico hai perso
      else if (arrayNumBombe.indexOf(numeroUte) != -1)
      {
          console.log(numeroUte);
          console.log("ultimo numero scelto e': ", numeroUte);
          console.log("hai PERSO e il tuo punteggio e': ", punteggio );
          document.getElementById("esito").innerHTML = "<h5 class='red'>" + "HAI PERSO MI DISPIACE" + "</h5>";
          stampa2 +=  "<li>" + numeroUte + "</li>";
          document.getElementById("stampa2").innerHTML = stampa2;
          break;
      }else{}
      console.log(numeroUte);

    }
    console.log("arrayUte: ", arrayNumUte);
    console.log(arrayNumUte[i-1]);
  }
