import axios from "axios";


export const getMovies = () => {
    return axios.get("https://localhost:44394/api/Movie");
  }

export const getMovieById = (movieId) => {
  return axios.get("https://localhost:44394/api/Movie/" + movieId);
}


export const handleSubmit = (e, movie) => {
    e.preventDefault();
    const {name, value} = e.target;
    const newMovie = {...movie, [name]: value };
    axios.post("https://localhost:44394/api/Movie", newMovie).then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error("Error while saving new movie.", error);
    });
    return getMovies();
    //addMovie(newMovie);
    //return input boxes back to empty boxes after submit button is clicked
}


export const handleDeleteMovie = (movieId) => {
    if (!movieId) {
      console.error("Invalid movieId");
      return;
    }
    axios.delete("https://localhost:44394/api/Movie/" + movieId).then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error deleting movies:", error);
    });
    return getMovies();
  } 

  export const handleUpdate = (e, movie, updateMovieId) => {
    e.preventDefault();
    const { name, value } = e.target;
    //let movieToUpdate = movies.find((movie) => movie.id === updateMovieId);
    const movieToUpdate = {...movie, [name]: value };
  //   setMovie(movieToUpdate);

  //   const updatedMovies = movies.map((m) =>
  //   m.id === movie.id ? { ...movie } : m
  // );
  // if (movies.some((m) => m.id === movie.id)) {
  //   setMovies(updatedMovies);
  // }
  axios.put("https://localhost:44394/api/Movie/" + updateMovieId, movieToUpdate).then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error("Error while updating.", error);
  });
  return getMovies(); //refreshing the page
  };