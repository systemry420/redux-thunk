import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { fetchMovies } from '../redux/counter/actions'

const Movie = ({  }) => {
    const dispatch = useDispatch()
    const { movies, loading, error } = useSelector(state => state.movies)

  React.useEffect(() => {
    dispatch(fetchMovies())
    return () => {
    }
  }, [])
  
  return (
    <div>
        {loading && <h2>Loading</h2>}
        {error && <h2>{error}</h2>}
        <h1>{movies.title}</h1>
    </div>
  )
}


export default (Movie)