import PropTypes from 'prop-types';
export function ListOfMovies({movies}) {

    return (
        <ul className='movies'>
            {
                movies.map(movie => (
                    <li className='movie' key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title}/>
                    </li>
                ))
            }
        </ul>
    )
}

export function NoMoviesResults() {
    return (
        <p>No se encontraron películas para esta busqueda</p>
    )
}

export function Movies({movies}) {
    const hasMovies = movies?.length > 0
    return (
        hasMovies
            ? <ListOfMovies movies={movies}/>
            : <NoMoviesResults/>
    )
}

ListOfMovies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
    })),
};

Movies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
    })),
};