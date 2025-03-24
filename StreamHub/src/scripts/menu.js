// Carrousel spécifique pour "À la une"
(function setupMainCarousel() {
    let currentSlide = 0;
    const carouselContainer = document.querySelector('.carousel-container-featured');
    if (!carouselContainer) return;

    const slides = carouselContainer.querySelectorAll('.slidea');
    const carouselSlides = carouselContainer.querySelector('.carousel-slides');
    const totalSlides = slides.length;

    function updateCarousel() {
        const slideWidth = carouselContainer.clientWidth; // Largeur visible du conteneur
        carouselSlides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides; // Passer à la slide suivante, revenir au début si fin
        updateCarousel();
    }

    // Auto-slide toutes les 5 secondes
    setInterval(nextSlide, 5000);

    // Ajuster la largeur lors du redimensionnement
    window.addEventListener('resize', updateCarousel);

    // Initialisation
    updateCarousel();
})();

document.addEventListener("DOMContentLoaded", function() {

    function setupCarousel(carouselClass, prevButtonId, nextButtonId) {
        let currentSlide = 0;
        const carouselContainer = document.querySelector(carouselClass);
        if (!carouselContainer) return;

        const slides = carouselContainer.querySelectorAll('.slide');
        const carouselSlides = carouselContainer.querySelector('.carousel-slides');
        const totalSlides = slides.length;
        const slideWidth = slides[0].clientWidth + 350; // Largeur d'une slide + margin

        const prevButton = document.getElementById(prevButtonId);
        const nextButton = document.getElementById(nextButtonId);

        function updateCarousel() {
            carouselSlides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }

        function prevSlide() {
            currentSlide = (currentSlide > 0) ? currentSlide - 1 : 0;
            updateCarousel();
        }

        function nextSlide() {
            const maxSlide = totalSlides - 5; // Ajuster pour 5 slides visibles
            currentSlide = (currentSlide < maxSlide) ? currentSlide + 1 : maxSlide;
            updateCarousel();
        }

        // Ajouter les écouteurs d'événement aux boutons
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);

        updateCarousel();
    }

    // Initialisation des carrousels
    setupCarousel('.carousel-container-1', 'prev-lectures-1', 'next-lectures-1');
    setupCarousel('.carousel-container-2', 'prev-lectures-2', 'next-lectures-2');
    setupCarousel('.carousel-container-3', 'prev-lectures-3', 'next-lectures-3');
    setupCarousel('.carousel-container-4', 'prev-lectures-4', 'next-lectures-4');

});