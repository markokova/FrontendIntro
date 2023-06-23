import React from 'react';
import Button from '../Button';

function MovieForm({onAction, text, movie, setMovieValue}){
    const setValues = (e) => {
        const {name, value} = e.target;
        const updatedMovie = {...movie, [name]: value };
        setMovieValue(updatedMovie);
      }

    return(
        <div id='newMovieForm'>
            <h2>{text}</h2>
            <form id="movieForm" action="" method="post">
                <div>
                    <label>Movie Title: </label>
                    <input type="text" id="title" placeholder="Enter movie title" required name="title" value={movie.title} onChange={(e) => setValues(e)}/>
                </div>
                <div>
                    <label>Runtime: </label>
                    <input type="number" id="runtime" placeholder="Enter movie runtime" min="0" name="runtime" value={movie.runtime} onChange={(e) => setValues(e)}/>
                </div>            
                <div>
                    <label>Year of Release: </label>
                    <input type="date" id="releaseDate" placeholder="Enter year of release" required name="yearOfRelease" value={movie.yearOfRelease} onChange={(e) => setValues(e)}/>
                </div>
                <div>
                    <Button text={text} onClick={onAction}/>
                </div>
            </form>
        </div>
    )
}

export default MovieForm;