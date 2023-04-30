import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe 
        width="560" 
        height="315" 
        src={`https://www.youtube.com/embed/${movie.trailer}`}
        title={`${movie.title} Trailer`}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieDetails;
