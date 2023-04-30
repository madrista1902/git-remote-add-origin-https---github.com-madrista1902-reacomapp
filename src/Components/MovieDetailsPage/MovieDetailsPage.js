import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../MovieDetails/MovieDetails';

import { moviesData } from '../Data/Data';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const movie = moviesData.find(movie => movie.id === parseInt(id));

  return <MovieDetails movie={movie} />;
};

export default MovieDetailsPage;
