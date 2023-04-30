import React, { useState } from 'react';

const AddMovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState(0);
  const [trailer, setTrailer] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = {
      title,
      description,
      posterURL,
      rating,
      trailer,
      id: Math.random(),
    };
    onAddMovie(newMovie);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating(0);
    setTrailer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Movie</h2>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="posterURL">Poster URL</label>
        <input
          type="text"
          id="posterURL"
          value={posterURL}
          onChange={(event) => setPosterURL(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          min="0"
          max="5"
          step="0.1"
          value={rating}
          onChange={(event) => setRating(parseFloat(event.target.value))}
        />
      </div>
      <div>
        <label htmlFor="trailer">Trailer</label>
        <input
          type="text"
          id="trailer"
          value={trailer}
          onChange={(event) => setTrailer(event.target.value)}
        />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
