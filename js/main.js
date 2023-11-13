// Questo è il file che contiene tutto il codice JS della pagina web

//Prompt età + costante
let agePassenger = parseInt(prompt("Inserisci la tua età:"));
let kmTravel = parseInt(prompt("Dimmi quanti km devi percorrere:"));
const PrizeKm = 0.21;
let finalPrize;

switch(true){

    case(agePassenger > 18 && agePassenger < 65):
    finalPrize = PrizeKm * kmTravel;
    parseFloat(finalPrize);
    document.getElementById("risultatoSomma").innerHTML = "Ecco il conto da pagare "+finalPrize.toFixed(2)+"£";
    console.log("Passeggero Normale")
    break;

    case(agePassenger < 18):
    let finalPrizeDiscount20;
    finalPrize = PrizeKm * kmTravel;
    finalPrizeDiscount20 = finalPrize - ((finalPrize * 20) / 100);
    parseFloat(finalPrize);
    document.getElementById("risultatoSomma").innerHTML = "Ecco il conto da pagare "+finalPrizeDiscount20.toFixed(2)+"£";
    console.log("Passeggero Minorenne")
    break;

    case(agePassenger > 65):
    let finalPrizeDiscount40;
    finalPrize = PrizeKm * kmTravel;
    finalPrizeDiscount40 = finalPrize - ((finalPrize * 40) / 100);
    parseFloat(finalPrize);
    document.getElementById("risultatoSomma").innerHTML = "Ecco il conto da pagare "+finalPrizeDiscount40.toFixed(2)+"£";
    console.log("Passeggero Ansiano")
    break;

    

}
