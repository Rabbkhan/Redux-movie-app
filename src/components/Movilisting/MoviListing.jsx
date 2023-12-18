import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies,getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MoviListing.scss';

const MoviListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);


  let renderMovies, renderShows = "";
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h1>{movies.Error}</h1>
    </div>
  );
  renderShows = shows.Response === "True" ? (
    shows.Search.map((show, index) => (
      <MovieCard key={index} data={show} />
    ))
  ) : (
    <div className="movies-error">
      <h1>{shows.Error}</h1>
    </div>
  );

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>{renderMovies}</div>
      </div>
      <div className='show-list'>
        <h2>show</h2>
        <div className='show-container'>{renderShows}</div>
      </div>
    </div>
  );
};

export default MoviListing;
