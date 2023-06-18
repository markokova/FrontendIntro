import React, { useState } from 'react';
import Button from './Button';

function NewMovieForm({addMovie}){
    const [title, setTitle] = useState('');
    const [runtime, setRuntime] = useState(0);
    const [yearOfRelease, setYearOfRelease] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const movie = {title, runtime, yearOfRelease};
        addMovie(movie);
        //return input boxes back to empty boxes after submit button is clicked
        setTitle('');
        setRuntime('');
        setYearOfRelease('');
    }

    return(
        <div id='newMovieForm'>
            <h2>Create Movie</h2>
            <form id="movieForm" action="" method="post" onSubmit={handleSubmit}>
                <div>
                    {/* <label for="title">Movie Title</label> */}
                    <label>Movie Title: </label>
                    <input type="text" id="title" placeholder="Enter movie title" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    {/* <label for="runtime">Runtime</label> */}
                    <label>Runtime: </label>
                    <input type="number" id="runtime" placeholder="Enter movie runtime" min="0" value={runtime} onChange={(e) => setRuntime(e.target.value)}/>
                </div>            
                <div>
                    {/* <label for="releaseDate">Year of Release</label> */}
                    <label>Year of Release: </label>
                    <input type="date" id="releaseDate" placeholder="Enter year of release" required value={yearOfRelease} onChange={(e) => setYearOfRelease(e.target.value)}/>
                </div>
                <div>
                    <Button text="Add new movie"/>
                </div>
            </form>
        </div>
    )
}

export default NewMovieForm;