// This file contains the JavaScript code for the Netflix-style website.
// It handles dynamic content, user interactions, and any functionality required for the site.

document.addEventListener('DOMContentLoaded', () => {
    const movieList = [
        { title: "Movie 1", image: "path/to/image1.jpg" },
        { title: "Movie 2", image: "path/to/image2.jpg" },
        { title: "Movie 3", image: "path/to/image3.jpg" },
        // Add more movies as needed
    ];

    const movieContainer = document.getElementById('movie-container');

    movieList.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const movieImage = document.createElement('img');
        movieImage.src = movie.image;
        movieImage.alt = movie.title;

        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.title;

        movieElement.appendChild(movieImage);
        movieElement.appendChild(movieTitle);
        movieContainer.appendChild(movieElement);
    });
});