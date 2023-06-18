import Button from './Button';

function MovieTable({movies, deleteMovie}){
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
                        <tr key={movie.id}>
                            <td>{movie.title}</td>
                            <td>{movie.runtime}</td>
                            <td>{movie.yearOfRelease}</td>
                            <td><Button text="Update"/></td>
                            <td><Button text="Delete" onSubmit={() => deleteMovie(movie.id)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MovieTable;