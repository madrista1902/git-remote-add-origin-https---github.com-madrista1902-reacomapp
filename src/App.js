import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './Components/MovieList/MovieList';
import Filter from './Components/Filter/Filter';
import AddMovie from './Components/AddMovie/AddMovie';
import MovieDetailsPage from './Components/MovieDetailsPage/MovieDetailsPage';
import { moviesData } from './Components/Data/Data';
import  Navbar  from './Components/Navbar/Navbar';

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [filter, setFilter] = useState({ title: '', rating: 0 });

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
    );
  });

  return (
    
      <div className="container">
      <React.Fragment>
      <Navbar onFilterChange={handleFilterChange} />

      
            
      <Routes>
         
         <Route path='/' exact element={<MovieList movies={filteredMovies} />}/>
         <Route path='/add' element={<AddMovie onAddMovie={handleAddMovie} />}/>
         <Route path='/search' element={<Filter filter={filter} onFilterChange={handleFilterChange} />} />


          <Route path="/movies/:id" element={<MovieDetailsPage/>} />
        </Routes>

      </React.Fragment>
              </div>
    
  );
};
export default App