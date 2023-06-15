document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission and page reload

    createMovie();
    displayMovies();
});


function createMovie(){
    // Get form inputs
    var titleInput = document.getElementById('title');
    var runtimeInput = document.getElementById('runtime');
    var releaseDateInput = document.getElementById('releaseDate');

    // Get movie details from inputs
    var title = titleInput.value;
    var runtime = runtimeInput.value;
    var releaseDate = releaseDateInput.value;

    // Create movie object
    var movie = {
        title: title,
        runtime: runtime,
        releaseDate: releaseDate
    };

    // Get existing movies list from cache
    var moviesList = JSON.parse(localStorage.getItem('moviesList')) || [];

    // Add the new movie to the list
    moviesList.push(movie);

    // Store the updated list in cache
    localStorage.setItem('moviesList', JSON.stringify(moviesList));

    // Optional: Display a success message or perform any other actions
    console.log('Movie created successfully!');
}



function displayMovies() {
    // Get the table body element
    var tableBody = document.querySelector('.styled-table tbody');
  
    // Clear existing table rows
    tableBody.innerHTML = '';
  
    // Get the movies list from cache
    var moviesList = JSON.parse(localStorage.getItem('moviesList')) || [];
  
    // Iterate over each movie and create table rows
    moviesList.forEach(function(movie, index) {
      // Create a new table row
      var row = document.createElement('tr');
  
      // Create table data cells for movie details
      var titleCell = document.createElement('td');
      var titleLink = document.createElement('a');
  
      // Movie title is clickable and leads to movieDetails.html page
      titleLink.textContent = movie.title;
      titleLink.href = 'pages/movieDetails.html?id=' + index;
      titleCell.appendChild(titleLink);
      var runtimeCell = document.createElement('td');
      runtimeCell.textContent = movie.runtime;
      var releaseDateCell = document.createElement('td');
      releaseDateCell.textContent = movie.releaseDate;
  
      // Create table data cells for buttons
      var buttonsCell = document.createElement('td');
  
      // Create update button
      var updateButton = document.createElement('button');
      updateButton.textContent = 'Update';
      updateButton.addEventListener('click', function() {
        updateMovie(index); // Call the updateMovie() function with the index of the movie
      });
  
      // Create delete button
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        deleteMovie(index); // Call the deleteMovie() function with the index of the movie
      });
  
      // Append buttons to the buttons cell
      buttonsCell.appendChild(updateButton);
      buttonsCell.appendChild(deleteButton);
  
      // Append cells to the row
      row.appendChild(titleCell);
      row.appendChild(runtimeCell);
      row.appendChild(releaseDateCell);
      row.appendChild(buttonsCell);
  
      // Append the row to the table body
      tableBody.appendChild(row);
    });
  }

function updateMovie(index) {
    // Get the movies list from cache
    var moviesList = JSON.parse(localStorage.getItem('moviesList')) || [];

    // Check if the index is within the valid range
    if (index >= 0 && index < moviesList.length) {
        var movie = moviesList[index];
        
        // Prompt the user for updated movie details
        var updatedTitle = prompt('Enter updated movie title:', movie.title);
        var updatedRuntime = prompt('Enter updated movie runtime:', movie.runtime);
        var updatedReleaseDate = prompt('Enter updated year of release:', movie.releaseDate);

        // Update the movie with the new values if provided
        if (updatedTitle !== null) {
            movie.title = updatedTitle;
        }
        if (updatedRuntime !== null) {
            movie.runtime = updatedRuntime;
        }
        if (updatedReleaseDate !== null) {
            movie.releaseDate = updatedReleaseDate;
        }

        // Store the updated list in cache
        localStorage.setItem('moviesList', JSON.stringify(moviesList));

        // Display the updated list of movies
        displayMovies();

        // Optional: Display a success message or perform any other actions
        console.log('Movie updated successfully!');
    }
}


function deleteMovie(index) {
    // Get the movies list from cache
    var moviesList = JSON.parse(localStorage.getItem('moviesList')) || [];
  
    // Check if the index is within the valid range
    if (index >= 0 && index < moviesList.length) {
      // Remove the movie at the specified index
      moviesList.splice(index, 1);
  
      // Store the updated list in cache
      localStorage.setItem('moviesList', JSON.stringify(moviesList));
  
      // Display the updated list of movies
      displayMovies();
  
      // Optional: Display a success message or perform any other actions
      console.log('Movie deleted successfully!');
    }
  }

// Call the function to display movies when the page loads
displayMovies();