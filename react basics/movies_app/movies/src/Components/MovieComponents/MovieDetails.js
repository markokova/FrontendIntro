import { useState, useEffect } from "react";
import { useParams  } from "react-router-dom";
import { getMovieById } from "../../services/MovieService";

function MovieDetails(){


    const { id } = useParams();
    const [movie, setMovie] = useState({}); 

    useEffect(() => {
        getMovie();
      }, []);
    
    const getMovie = () => {
        getMovieById(id)
          .then((response) => {
            console.log(response);
            setMovie(response.data);
          })
          .catch((error) => {
            console.error("Error fetching single movie:", error);
          });
      };

    return(
        <div id="movieDetails">
            <h1>MovieDetails</h1>
            <h2>Title: {movie.Title}</h2>
            <h3>Runtime: {movie.Runtime}</h3>
            <h3>Year of Release: {movie.YearOfRelease}</h3>
        </div>
    );
}

export default MovieDetails;