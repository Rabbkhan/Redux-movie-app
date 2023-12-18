import React, { useEffect } from 'react'
import MovieListing from '../Movilisting/MoviListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies,fetchAsyncShow } from '../../features/movies/movieSlice'
const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(fetchAsyncMovies())
dispatch(fetchAsyncShow())

},[dispatch]);
  return (
    <>
    <div className='banner-img'></div>
<MovieListing/>
    </>
    )
}

export default Home