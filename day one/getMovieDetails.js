// Get the movie index from the URL parameter
var params = new URLSearchParams(window.location.search);
var movieIndex = parseInt(params.get('id'));

// Get the movies list from cache
var moviesList = JSON.parse(localStorage.getItem('moviesList')) || [];

// Check if the movie index is valid
if (movieIndex !== null && movieIndex >= 0 && movieIndex < moviesList.length) {
  var movie = moviesList[movieIndex];

  // Access and display the movie details on the page as needed
  // For example, you can update the HTML elements with the movie details:
  window.addEventListener('DOMContentLoaded', function() {
    var movieTitleElement = document.getElementById('movieTitle');
    movieTitleElement.textContent = movie.title;

    var runtimeElement = document.getElementById('runtime');
    runtimeElement.textContent = movie.runtime;

    var releaseDateElement = document.getElementById('releaseDate');
    releaseDateElement.textContent = movie.releaseDate;
  });
}