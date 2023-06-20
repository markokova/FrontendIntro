import Button from './Button';

function MovieTable({movies, deleteMovie, updateMovie}){
    return(
        <div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Runtime</th>
                        <th>Release Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="moviesTableBody">
                    {movies.map((movie) => (
                        <tr key={movie.Id}>
                            <td>{movie.Title}</td>
                            <td>{movie.Runtime}</td>
                            <td>{movie.YearOfRelease}</td>
                            <td><Button text="Update" onClick={() => updateMovie(movie.id)}/><Button text="Delete" onClick={() => deleteMovie(movie.id)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MovieTable;