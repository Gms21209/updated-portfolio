/*//Sliders

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners

nextBtn.addEventListener('click', () => {

  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {

  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === "lastClone") {
      carouselSlide.style.transition = "none";
      counter = carouselImages.length -2 ;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter].id === "lastClone") {
      carouselSlide.style.transition = "none";
      counter = carouselImages.length - counter;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});*/


var slideNo = 1;
Carousel(slideNo);

function Carousel(n){
  var slides = document.getElementsByClassName("image-container");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideNo = 1;
  }
  if (n < 1) {
    slideNo = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideNo - 1].style.display = "block";
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideNo - 1].className += " active";

}
function newSlide(n){
  Carousel(slideNo += n);
}
function currentSlide(n){
  Carousel(slideNo = n);
}






var slideNo2 = 1;
Carousel2(slideNo2);

function Carousel2(n){
  var slides2 = document.getElementsByClassName("image-container2");
  var dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {
    slideNo2 = 1;
  }
  if (n < 1) {
    slideNo2 = slides2.length;
  }
  for (var i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slides2[slideNo2 - 1].style.display = "block";
  for (var i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  dots2[slideNo2 - 1].className += " active";

}
function newSlide2(n){
  Carousel2(slideNo2 += n);
}
function currentSlide2(n){
  Carousel2(slideNo2 = n);
}



var slideNo3 = 1;
Carousel3(slideNo3);

function Carousel3(n){
  var slides3 = document.getElementsByClassName("image-container3");
  var dots3 = document.getElementsByClassName("dot3");
  if (n > slides3.length) {
    slideNo3 = 1;
  }
  if (n < 1) {
    slideNo3 = slides3.length;
  }
  for (var i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  slides3[slideNo3 - 1].style.display = "block";
  for (var i = 0; i < dots3.length; i++) {
    dots3[i].className = dots3[i].className.replace(" active", "");
  }
  dots3[slideNo3 - 1].className += " active";

}
function newSlide3(n){
  Carousel3(slideNo3 += n);
}
function currentSlide3(n){
  Carousel3(slideNo3 = n);
}







var slideNo4 = 1;
Carousel4(slideNo4);

function Carousel4(n){
  var slides4 = document.getElementsByClassName("image-container4");
  var dots4 = document.getElementsByClassName("dot4");
  if (n > slides4.length) {
    slideNo4 = 1;
  }
  if (n < 1) {
    slideNo4 = slides4.length;
  }
  for (var i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  slides4[slideNo4 - 1].style.display = "block";
  for (var i = 0; i < dots4.length; i++) {
    dots4[i].className = dots4[i].className.replace(" active", "");
  }
  dots4[slideNo4 - 1].className += " active";

}
function newSlide4(n){
  Carousel4(slideNo4 += n);
}
function currentSlide4(n){
  Carousel4(slideNo4 = n);
}
