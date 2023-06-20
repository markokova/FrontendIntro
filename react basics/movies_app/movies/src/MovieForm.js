import React from 'react';
import Button from './Button';

function MovieForm({onAction, text, movie, setMovieValue}){
 
    // const handleChange = (e) => {
    //     setValues(e);
    //     // const {name, value} = e.target;
    //     // const updatedMovie = {...movie, [name]: value };
    //     // updateMovieState(updatedMovie);
    // }

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

// const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const movie = {title, runtime, yearOfRelease};
        
    //     addMovie(movie);

    //     //return input boxes back to empty boxes after submit button is clicked
    //     setTitle('');
    //     setRuntime('');
    //     setYearOfRelease('');
    // }

// import React, { useState, useEffect } from 'react';
// import Button from './Button';

// function MovieForm({ addMovie, text, movie, onClose }) {
//   const [title, setTitle] = useState('');
//   const [runtime, setRuntime] = useState(0);
//   const [yearOfRelease, setYearOfRelease] = useState('');

//   useEffect(() => {
//     if (movie) {
//       setTitle(movie.title);
//       setRuntime(movie.runtime);
//       setYearOfRelease(movie.yearOfRelease);
//     }
//   }, [movie]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedMovie = { title, runtime, yearOfRelease };

//     if (movie) {
//       addMovie(movie.id, updatedMovie);
//     } else {
//       addMovie(updatedMovie);
//     }

//     setTitle('');
//     setRuntime(0);
//     setYearOfRelease('');
//     if(movie){
//         onClose();
//     }
    
//   };

//   return (
//     <div>
//       <h2>{text}</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="titleInput">Title:</label>
//         <input
//           type="text"
//           id="titleInput"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <label htmlFor="runtimeInput">Runtime:</label>
//         <input
//           type="number"
//           id="runtimeInput"
//           value={runtime}
//           onChange={(e) => setRuntime(Number(e.target.value))}
//         />
//         <label htmlFor="releaseInput">Release Date:</label>
//         <input
//           type="text"
//           id="releaseInput"
//           value={yearOfRelease}
//           onChange={(e) => setYearOfRelease(e.target.value)}
//         />
//         <Button type="submit" text={text} />
//       </form>
//     </div>
//   );
// }

// export default MovieForm;