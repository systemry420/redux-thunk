import React from 'react'
import { connect } from 'react-redux'

const Movie = ({ fetchMovies, movies }) => {
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      fetchMovies(json)
    })
  
    return () => {
    }
  }, [])
  
  return (
    <div>
        <h1>{movies.title}</h1>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
    return {
      fetchMovies: (movies) => dispatch({ type: 'FETCH', payload: movies})
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies.movies
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movie)