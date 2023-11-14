// Questo è il file che contiene tutto il codice JS della pagina web

//Prompt età + costante
let persontravel = parseInt(prompt("Quante persone viaggiano:"));
let kmTravel = parseInt(prompt("Dimmi quanti km devi percorrere:"));
const PrizeKm = 0.21;

let finalPrize;

let totalprize = 0;

if(isNaN(persontravel) || isNaN(kmTravel)){
    alert("Non hai inserito un numero");
}
else{

    let sentinel = false;

    for (let i =0 ; i<persontravel; i++){

        if (sentinel==true)
        {
            break;
        }
        else
        {

            let agePassenger = parseInt(prompt("Inserisci la tua età:"));

            switch(true){
    
                case(agePassenger > 18 && agePassenger < 65):
                finalPrize = PrizeKm * kmTravel;
                parseFloat(finalPrize);
                totalprize = totalprize + finalPrize;
                console.log("Passeggero Normale")
                break;
    
                case(agePassenger < 18):
                let finalPrizeDiscount20;
                finalPrize = PrizeKm * kmTravel;
                finalPrizeDiscount20 = finalPrize - ((finalPrize * 20) / 100);
                parseFloat(finalPrize);
                totalprize = totalprize + finalPrizeDiscount20;
                console.log("Passeggero Minorenne")
                break;
    
                case(agePassenger > 65):
                let finalPrizeDiscount40;
                finalPrize = PrizeKm * kmTravel;
                finalPrizeDiscount40 = finalPrize - ((finalPrize * 40) / 100);
                parseFloat(finalPrize);
                totalprize = totalprize + finalPrizeDiscount40;
                console.log("Passeggero Ansiano")
                break;
    
                case(isNaN(agePassenger)):
                alert("Non hai inserito un età(Numero)");
                sentinel = true;
                console.log("Ha sbagliato a inserire il numero");
                break;
    
            }

        }

    }
}

document.getElementById("risultatoSomma").innerHTML = totalprize.toFixed(2)+"$";
