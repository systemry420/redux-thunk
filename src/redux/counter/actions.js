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

export const fetchMovies = () => {
    return (dispatch, getState) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: 'FETCH',
                payload: json
            })
        })
    }
}