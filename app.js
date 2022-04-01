
let card = ['♥','♦','♣','♠'];
let number = ["A" , 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];


window.onload = function() {
let singleCard = card[Math.floor(Math.random() * card.length)];
let singleNumber = number[Math.floor(Math.random() * number.length)];


document.getElementById("arriba").innerHTML = `${singleCard}`;
document.getElementById("centro").innerHTML = `${singleNumber}`;
document.getElementById("abajo").innerHTML = `${singleCard}`;

}

