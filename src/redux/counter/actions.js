import { DECREASE, INCREASE } from "./types"


export const increase = () => {
    return {
        type: INCREASE
    }
}


export const decrease = () => {
    return {
        type: DECREASE
    }
}

export const fetchMovies = () => async (dispatch, getState) => {
    dispatch({ type: 'FETCH_REQUEST'})

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        dispatch({
            type: 'FETCH_SUCCESS',
            payload: json
        })
    }).catch(error => {
        dispatch({ type: "FETCH_FAILURE", payload: error.message })
    })
}