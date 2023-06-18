import './App.css';
import NewMovieForm from './NewMovieForm'
import MovieTable from './MovieTable';
import { useEffect, useState } from 'react';


function App() {
  const[movies, setMovies] = useState([]);

  // Load movies from localStorage on component mount
  useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  // Save movies to localStorage whenever the movies state changes
  useEffect(() => {
    //It is neccesary to stringify the json file because localStorage can hold only strings.
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie) => {
    const newMovie = { id: Date.now(), ...movie }
    setMovies([...movies, newMovie]);
  }

  const deleteMovie = (movieId) => {
    const updatedMovies = movies.filter((movie) => movie.id !== movieId);
    setMovies(updatedMovies);
  }

  return(
    <div>
      <h1>NotIMDb</h1>  
      <MovieTable movies={movies} deleteMovie={deleteMovie}/>
      <NewMovieForm addMovie={addMovie}/>
    </div>
  );
}

export default App;
