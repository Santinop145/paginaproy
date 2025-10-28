let btn = document.querySelector('.nav');
let nav = document.getElementById('hamburguesaNav');

btn.addEventListener('click', () => {
    nav.classList.toggle('open');
});

let carrusel = document.querySelector('.carrusel');
let btnLeft = document.querySelector('.scroll-btn.left');
let btnRight = document.querySelector('.scroll-btn.right');
let slides = document.querySelectorAll('.carrusel li');

let currentIndex = 0;

function goToSlide(index) {
  carrusel.scrollTo({
    left: carrusel.offsetWidth * index,
    behavior: 'smooth'
  });
}

btnRight.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
});

btnLeft.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  goToSlide(currentIndex);
});

carrusel.addEventListener('scroll', () => {
  currentIndex = Math.round(carrusel.scrollLeft / carrusel.offsetWidth);
});

window.addEventListener('resize', () => goToSlide(currentIndex));