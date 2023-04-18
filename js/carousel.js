let currentIndex = 0;
const carouselItems = document.getElementsByClassName('carousel-item');

// Funzione per scorrere a sinistra
function slideLeft() {
  const prevIndex = currentIndex;
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  carouselItems[prevIndex].classList.remove('active');
  carouselItems[currentIndex].classList.add('active');
}

// Funzione per scorrere a destra
function slideRight() {
  const prevIndex = currentIndex;
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[prevIndex].classList.remove('active');
  carouselItems[currentIndex].classList.add('active');
}
