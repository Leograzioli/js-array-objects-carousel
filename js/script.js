const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//create array with key "image"
const imgTittleArray = images.map(element => element.title);
const imgTextArray = images.map(element => element.text);

const upperSlide = document.querySelector(".upper-slide")
const lowerSlide = document.querySelector(".lower-slide")

CreateElement(images);

//initial slider status
const imageCard = document.getElementsByClassName("card-img");
const lowerImageCard = document.querySelectorAll(".img-col");
console.log(lowerImageCard);
let sliderPosition = 0;
imageCard[sliderPosition].classList.add("active");
lowerImageCard[sliderPosition].classList.add("active");

//button click
rightSlider(images, imageCard, lowerImageCard);
leftSlider(imageCard, lowerImageCard);
onImgClick(imageCard, lowerImageCard);

// FUNCTIONS

//create element html and print on DOM
//arrayImg -> (array) image's array name to create element
//arrayText -> (array) text array to add on img
//arrayTtitle -> (array) title array to add on img
function CreateElement (arrayImg) {
    arrayImg.map((element) => {
        const upperImg = `
            <div class="card-img">
                <img src="${element.image}" alt="">
                <div class="img-text">
                    <h2>${element.title}</h2>
                    <p>${element.text}</p>
                </div>
            </div>
        `
        const lowerImg = `
            <div class="img-col">
                <img src="${element.image}" alt="">
            </div>
        `
        upperSlide.innerHTML += upperImg;
        lowerSlide.innerHTML += lowerImg;
    })
}

//when right button is click, shows the next pic 
//imgArray (array) -> to know how many pic are and set as limit
// elementHtml1 -> (element html) element html to add and remove class
// elementHtml2 -> (element html) element html to add and remove class
function rightSlider (imgArray, elementHtml1, elementHtml2, slider) {
    const rightBtn = document.querySelector(".right");

    rightBtn.addEventListener("click", () => {

    elementHtml1[sliderPosition].classList.remove("active");
    elementHtml2[sliderPosition].classList.remove("active");

    if (sliderPosition < (imgArray.length - 1)){
        sliderPosition++
    } else {
        sliderPosition = 0
    }

    elementHtml1[sliderPosition].classList.add("active");
    elementHtml2[sliderPosition].classList.add("active");
});
}

//when right button is click, shows the next pic 
// elementHtml1 -> (element html) element html to add and remove class
// elementHtml2 -> (element html) element html to add and remove class
function leftSlider (elementHtml1, elementHtml2) {
    const leftBtn = document.querySelector(".left");

    leftBtn.addEventListener("click", () => {
    elementHtml1[sliderPosition].classList.remove("active");
    elementHtml2[sliderPosition].classList.remove("active");

    if (sliderPosition > 0){
        sliderPosition--
    } else {
        sliderPosition = 4
    }
    
    elementHtml1[sliderPosition].classList.add("active");
    elementHtml2[sliderPosition].classList.add("active");
})
}

//on image click change the main picture
// elementHtml1 -> (element html) element html to add and remove class
// elementHtml2 -> (element html) element html to add and remove class
function onImgClick(elementHtml1, elementHtml2) {
    elementHtml2.forEach((element, index) => {
        element.addEventListener("click", () => {
            
            elementHtml1[sliderPosition].classList.remove("active");
            elementHtml2[sliderPosition].classList.remove("active");
           
            sliderPosition = index;
            
            elementHtml1[sliderPosition].classList.add("active");
            elementHtml2[sliderPosition].classList.add("active");
        })
});
}