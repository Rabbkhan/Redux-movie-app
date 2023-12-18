import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrShowDetail,getAllmoveOrshows } from '../../features/movies/movieSlice';
import './Moviedetails.scss';
const Moviedetail = () => {
const {imdbID}=useParams();
const dispatch = useDispatch()
const data = useSelector(getAllmoveOrshows)
console.log(data)
useEffect(()=>{
dispatch(fetchAsyncMovieOrShowDetail(imdbID));
},[dispatch,imdbID])

  return (
    <div className='movie-card'>
      {Object.keys(data).length === 0 ?(
        <p>Loading....</p>
      ):
      (
        <>
  <div className='movie-poster'>
    <img src={data.Poster} alt={data.Title} />
  </div>
  <div className='movie-info'>
    <div className='movie-title'>{data.Title}</div>
    <div className='movie-details'>
    <div className='movie-details'>
      <p>Year: {data.Year}</p>
      <p>Rated: {data.Rated}</p>
      <p>Released: {data.Released}</p>
      <p>Runtime: {data.Runtime}</p>
      <p>Genre: {data.Genre}</p>
      <p>Director: {data.Director}</p>
      <p>Writer: {data.Writer}</p>
      <p>Actors: {data.Actors}</p>
      <p>Language: {data.Language}</p>
      <p>Country: {data.Country}</p>
      <p>Awards: {data.Awards}</p>
    </div>
    </div>
    <div className='movie-plot'>
      <p>{data.Plot}</p>
    </div>
    </div>
        </>
 )}
</div>

  
  )
}

export default Moviedetail