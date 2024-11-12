let currentIndex = 0;

  function updateCarousel() {
    const carousel = document.getElementById('carousel3');
    const slideWidth = carousel.clientWidth;
    carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  }

  function nextSlide() {
    const carousel = document.getElementById('carousel3');
    const totalSlides = carousel.children.length;
    currentIndex = (currentIndex + 1) % totalSlides; // Avanza a la siguiente imagen
    updateCarousel();
  }

  function prevSlide() {
    const carousel = document.getElementById('carousel3');
    const totalSlides = carousel.children.length;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Retrocede a la imagen anterior
    updateCarousel();
  }