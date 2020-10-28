// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
var numBombe = 16;
var possibilitàUte = 18;
var tentativi = possibilitàUte - numBombe;
var arrayNumBombe=[];
var arrayNumUte=[];
var punteggio = 0

//genero 16 numeri diversi random tra 1 e 100 e li inserisco in un array
while(arrayNumBombe.length < 16)
{
   var n = randomNum(100);
   if (arrayNumBombe.indexOf(n) == -1)
   {
    arrayNumBombe.push(n);
   }
}
  console.log(arrayNumBombe);

//chiedo all'utente di inserire un numero 100-16 volte
for(i=1; i<=tentativi; i++)
{
 var numeroUte = parseInt(prompt("inserisci un numero per il campo minato da 1 a 100"));

 //lo confronto con il mio array di bombe
   //se non c'è e finisco il massimo numero di tentativi pusho in un arraynumeri utente e punteggio++ e l'utente ha vinto
  if (arrayNumBombe.indexOf(numeroUte) == -1 && (arrayNumUte.length + 1) == tentativi )
  {
    arrayNumUte.push(numeroUte);
    console.log("arrayUte: ", arrayNumUte);
    console.log("hai VINTO ed hai totalizzato: ", punteggio , "punti" );
  }

  //se non c'è pusho in un arraynumeri utente e punteggio++
  else if (arrayNumBombe.indexOf(numeroUte) == -1)
  {
    punteggio += 1;
    arrayNumUte.push(numeroUte);
    console.log("arrayUte: ", arrayNumUte);
    console.log("Punteggio parziale: ", punteggio);
  }

  //se c'è gioco finito e stampo quanti punti o "giri" l'utente ha fatto e gli dico hai perso
  else if (arrayNumBombe.indexOf(numeroUte) != -1)
  {
    console.log("hai PERSO e il tuo punteggio e': ", punteggio );
  }

}










// var punteggio = 0;
// // da fare 100 - 16 volte
// for(i=1; i<= (100 - 16); i++)
// {
//   //chiedo all'utente di inserire un numero
//   var numeroUte = parseInt(prompt("inserisci un numero per il campominato"));
//   arrayNumUte.push(numeroUte)
//
//
//     // verifico che nn sia gia' tato inserito
//
//
//
//
//
//
//
//
//
//
//
//       //altrimenti l'utente ha vinto e ha totalizzato il max dei punti ovvero 100-16
//
//
//
//
// }

  //funzioni
  //numero random
  function randomNum(num)
  {
    return Math.floor(Math.random()*num)+1;
  }