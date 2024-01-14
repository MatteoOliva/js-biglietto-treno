const resultEelement = document.getElementById('result');
//  chiedi all'utente il numero di km
const userKm = parseInt(prompt('quanti Km vuoi percorrere'));

//  chiedi all'utente l'eta
const userAge = parseInt(prompt('Quanti anni hai'));

if(!isNaN(userKm)&& !isNaN(userAge)) {
//  calcolo il prezzo base
const priceKm = 0.21;
const basePrice = userKm * priceKm;

//  settare uno sconto base 0
let discountPerc = 0;

//  SE l'utente e maggiorenne
if(userAge < 18) {

  //  Setto lo sconto a 20
discountPerc = 20;
}

//  Altrimenti SE l utente e over 65
else if (userAge > 65) {
    //  setto lo sconto a 40
    discountPerc= 40;
}


//  calcolo il prezzo finale 
const discountPrice = (basePrice * discountPerc) / 100;
const finalPrice = basePrice - discountPrice;

//  formatto il prezzo finale
const priceText = "€" + finalPrice.toFixed(2);

//  stampo il prezzo
resultEelement.innerText = priceText;
} else {
    resultEelement.innerText = "I valori inseriti non sono validi. Ricarica la pagina"; 
}