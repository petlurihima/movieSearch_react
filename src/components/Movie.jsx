import React from 'react';

const Movie = ({ movies }) => {
    return (
        <>
        <div className="movie-list">
            {movies.length > 0 ?(
                movies.map(movie =>(
                    <div key={movie.imdID} className='movie-item'>
                        <img src={movie.Poster} alt={movie.Title} />
                        <h3>Title: {movie.Title}</h3>
                        <p>Released: {movie.Year}</p>
                        <p>Actors: {movie.Actors}</p>
                        <p>Plot: {movie.Plot}</p>
                        <p>Rating: {movie.imdbRating}</p>
                        <p>Country: {movie.Country}</p>
                    </div>
                ))
            ):(
                <h3>No movies Found</h3>
            )}
        </div>
        </>
    );
};

export default Movie;
