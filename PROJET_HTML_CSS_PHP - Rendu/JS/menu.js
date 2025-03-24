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

    // je ne sais pas pourquoi mais le premier carousel fonctionne pas de la même manière 
    // malgré le fait qu'il ai le même programme que les autre

    function setupCarousel1() {
        let currentSlide = 0;
        const carouselContainer = document.querySelector('.carousel-container-1');
        if (!carouselContainer) return;

        const slides = carouselContainer.querySelectorAll('.slide');
        const carouselSlides = carouselContainer.querySelector('.carousel-slides');
        const totalSlides = slides.length;
        const slideWidth = slides[0].clientWidth + 350; // Largeur d'une slide + margin

        const prevButton = document.getElementById('prev-lectures-1');
        const nextButton = document.getElementById('next-lectures-1');

        function updateCarousel() {
            carouselSlides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }

        function prevSlide() {
            currentSlide = (currentSlide > 0) ? currentSlide - 1 : 0;
            updateCarousel();
        }

        function nextSlide() {
            const maxSlide = totalSlides - 5; // Ajuster pour 5 slides visibles
            currentSlide = (currentSlide < maxSlide) ? currentSlide + 1.4 : maxSlide;
            updateCarousel();
        }

        // Ajouter les écouteurs d'événement aux boutons
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);

        updateCarousel();
    }

    

    function setupCarousel2() {
        let currentSlide = 0;
        const carouselContainer = document.querySelector('.carousel-container-2');
        if (!carouselContainer) return;

        const slides = carouselContainer.querySelectorAll('.slide');
        const carouselSlides = carouselContainer.querySelector('.carousel-slides');
        const totalSlides = slides.length;
        const slideWidth = slides[0].clientWidth + 350; // Largeur d'une slide + margin

        const prevButton = document.getElementById('prev-lectures-2');
        const nextButton = document.getElementById('next-lectures-2');

        function updateCarousel() {
            carouselSlides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }

        function prevSlide() {
            currentSlide = (currentSlide > 0) ? currentSlide - 1 : 0;
            updateCarousel();
        }

        function nextSlide() {
            const maxSlide = totalSlides - 5; // Ajuster pour 5 slides visibles
            currentSlide = (currentSlide < maxSlide) ? currentSlide + 1.4 : maxSlide;
            updateCarousel();
        }

        // Ajouter les écouteurs d'événement aux boutons
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);

        updateCarousel();
    }

    function setupCarousel3() {
        let currentSlide = 0;
        const carouselContainer = document.querySelector('.carousel-container-3');
        if (!carouselContainer) return;

        const slides = carouselContainer.querySelectorAll('.slide');
        const carouselSlides = carouselContainer.querySelector('.carousel-slides');
        const totalSlides = slides.length;
        const slideWidth = slides[0].clientWidth + 350; // Largeur d'une slide + margin

        const prevButton = document.getElementById('prev-lectures-3');
        const nextButton = document.getElementById('next-lectures-3');

        function updateCarousel() {
            carouselSlides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }

        function prevSlide() {
            currentSlide = (currentSlide > 0) ? currentSlide - 1 : 0;
            updateCarousel();
        }

        function nextSlide() {
            const maxSlide = totalSlides - 5; // Ajuster pour 5 slides visibles
            currentSlide = (currentSlide < maxSlide) ? currentSlide + 1.4 : maxSlide;
            updateCarousel();
        }

        // Ajouter les écouteurs d'événement aux boutons
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);

        updateCarousel();
    }

    function setupCarousel4() {
        let currentSlide = 0;
        const carouselContainer = document.querySelector('.carousel-container-4');
        if (!carouselContainer) return;

        const slides = carouselContainer.querySelectorAll('.slide');
        const carouselSlides = carouselContainer.querySelector('.carousel-slides');
        const totalSlides = slides.length;
        const slideWidth = slides[0].clientWidth + 350; // Largeur d'une slide + margin

        const prevButton = document.getElementById('prev-lectures-4');
        const nextButton = document.getElementById('next-lectures-4');

        function updateCarousel() {
            carouselSlides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }

        function prevSlide() {
            currentSlide = (currentSlide > 0) ? currentSlide - 1 : 0;
            updateCarousel();
        }

        function nextSlide() {
            const maxSlide = totalSlides - 5; // Ajuster pour gérer le dépassement des slides
            currentSlide = (currentSlide < maxSlide) ? currentSlide + 1.4 : maxSlide;
            updateCarousel();
        }

        // Ajouter les écouteurs d'événement aux boutons
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);

        updateCarousel();
    }

    // Initialisation des carrousels
    setupCarousel1();
    setupCarousel2();
    setupCarousel3();
    setupCarousel4();

});

