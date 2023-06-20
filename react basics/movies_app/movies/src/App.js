import './App.css';
import MovieForm from './MovieForm'
import MovieTable from './MovieTable';
import { useState } from 'react';

function App() {
  const initalMovieValue = {
    title: "",
    runtime: 0,
    yearOfRelease: ""
  }

  const[movies, setMovies] = useState([]);
  const[movie, setMovie] = useState(initalMovieValue);

  const [showCreateForm, setShowCreateForm] = useState(true);
  const [updateMovieId, setUpdateMovieId] = useState(null);


  const setMovieValue = (movie) => {
    setMovie(movie);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    const updatedMovie = {...movie, [name]: value };
    addMovie(updatedMovie);
    //return input boxes back to empty boxes after submit button is clicked
    setMovie(initalMovieValue);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let movieToUpdate = movies.find((movie) => movie.id === updateMovieId);
    movieToUpdate = {...movie, [name]: value };
    setMovie(movieToUpdate);

    const updatedMovies = movies.map((m) =>
    m.id === movie.id ? { ...movie } : m
  );
  if (movies.some((m) => m.id === movie.id)) {
    setMovies(updatedMovies);
  }
    setShowCreateForm(true);
    setMovie(initalMovieValue);
  };

  const addMovie = (movie) => {
    const newMovie = { id: Date.now(), ...movie }
    setMovies([...movies, newMovie]);

    //render create form
    setShowCreateForm(true);
    setUpdateMovieId(null);
  }

  const deleteMovie = (movieId) => {
    const updatedMovies = movies.filter((movie) => movie.id !== movieId);
    setMovies(updatedMovies);
  } 

  const updateMovie = (movieId) => {
    setShowCreateForm(false);
    setUpdateMovieId(movieId);
    let movieToUpdate = movies.find((movie) => movie.id === movieId);
    setMovie(movieToUpdate);
  };

return(
  <div> 
    <h1>NotIMDb</h1>
    {movies.length > 0 ? (
      <MovieTable movies={movies} deleteMovie={deleteMovie} updateMovie={updateMovie} />
      ) : (
        <p id="noMoviesMessage">No movies available.</p>
      )}
    
    {showCreateForm === true ? (
      <MovieForm movie={movie} onAction={handleSubmit}  setMovieValue={setMovieValue} text="Create Movie"/>
    ) : (
      <MovieForm movie={movie} onAction={handleUpdate}  handleSubmit={handleSubmit} setMovieValue={setMovieValue} text="Update Movie" movieId={updateMovieId}/>
    )}
  </div>
);

}

export default App;



/*
TODO

-dodat state u App.js za Pojedinacan film i taj jedan state ce imati sve propertije
-takoder i handleSubmit dici gore u App.js
-addMovie zamijeniti u nešto generickije tipa onAction ={addMovie} onAction={updateMovie}
-u movieTable ne valja poziv funkcije, mora biti isto ime kao i button
-backToCreate mi ne treba, bit ce u update metodi
-sprijecit kreiranje filmova bez naslova i yearOfRelease
-kad se klike update na retku da se oboja redak u drugaciju boju
*/