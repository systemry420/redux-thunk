
const initState = {
    movies: [],
    loading: false,
    error: null
}

export const movieReducer = (state = initState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case 'FETCH_REQUEST':
            return {
                ...state,
                loading: true
            }
    
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                movies: action.payload
            }
        case 'FETCH_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}