import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list" style={{
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    }}>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
