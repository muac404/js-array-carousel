"use strict";
// Creo array immagini
const images = ["img/01.jpg","img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"]

console.log(images)
// Definisco il contenitore delle immagini
const items = document.querySelector(".items")

// Ciclo per 
for (let i = 0; i < images.length; i++) {
   
    items.append(`<div class="item"><img src="${images[i]}" alt="img"></div>`)
    
    console.log(images[i])
    
}



