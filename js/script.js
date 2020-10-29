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

//genero 16 numeri diversi random tra 1 e 100 e li inserisco in un array
var stampa1 = "";
while(arrayNumBombe.length < 16)
{

   var n = randomNum(100);
   if (arrayNumBombe.indexOf(n) == -1)
   {
    arrayNumBombe.push(n);

   }
   stampa1 = stampa1 + "<li>" + arrayNumBombe[arrayNumBombe.length] + "</li>";
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







  //funzioni

  //numero random
  function randomNum(num)
  {
    return Math.floor(Math.random()*num)+1;
  }

  //CAMPOMINATO
  function campoMinato(numBombe, possibilitàUte)
  {
    var stampa2 = "";
    var tentativi = possibilitàUte - numBombe;
    //chiedo all'utente di inserire un numero 100-16 volte
    for(i=1; i<=tentativi; i++)
    {
     var numeroUte = parseInt(prompt("inserisci un numero per il campo minato da 1 a 100"));

      //controllo sul dato inserito dall'utente e se e' >100 o inserisce un NAN
      // o inserisce un qualcosa diverso da un numero allore abbasso il contatore e stampo un allert
      if(numeroUte > 100 || isNaN(numeroUte) || Number.isNaN(numeroUte)  )
      {
       alert('ATTENZIONE! inserisci un valore compreso tra 1 e 100');
       i--;
      }
      //lo confronto con il mio array di bombe
        //se non c'è e finisco il massimo numero di tentativi pusho in un arraynumeri utente e punteggio++ e l'utente ha vinto
      else if (arrayNumBombe.indexOf(numeroUte) == -1 && (arrayNumUte.length + 1) == tentativi )
      {
          punteggio += 1;
          arrayNumUte.push(numeroUte);
          console.log("arrayUte: ", arrayNumUte);
          console.log("hai VINTO ed hai totalizzato: ", punteggio , "punti" );
          document.getElementById("punteggio").innerHTML = punteggio;
          document.getElementById("esito").innerHTML = "HAI VINTO E HAI TOT IL MAX PUNTEGGIO";
          alert('HAI VINTO E HAI TOT IL MAX PUNTEGGIO');
          stampa2 = stampa2 + "<li>" + arrayNumUte[i]+ "</li>";
          document.getElementById("stampa2").innerHTML = stampa2;
      }

        //se non c'è pusho in un arraynumeri utente e punteggio++
      else if (arrayNumBombe.indexOf(numeroUte) == -1)
      {
          punteggio += 1;
          arrayNumUte.push(numeroUte);
          console.log("arrayUte: ", arrayNumUte);
          console.log("Punteggio parziale: ", punteggio);
          document.getElementById("punteggio").innerHTML = punteggio;
          stampa2 = stampa2 + "<li>" + arrayNumUte[i]+ "</li>" ;
          document.getElementById("stampa2").innerHTML = stampa2;
      }

        //se c'è gioco finito e stampo quanti punti o "giri" l'utente ha fatto e gli dico hai perso
      else if (arrayNumBombe.indexOf(numeroUte) != -1)
      {
          console.log("ultimo numero scelto e': ", numeroUte);
          console.log("hai PERSO e il tuo punteggio e': ", punteggio );
          document.getElementById("esito").innerHTML = "HAI PERSO MI DISPIACE";
          stampa2 = stampa2 + "<li>" + arrayNumUte[i]+ "</li>";
          document.getElementById("stampa2").innerHTML = stampa2;
          break;
      }

    }
  }
