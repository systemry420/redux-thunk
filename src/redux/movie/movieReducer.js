
const initState = {
    movies: []
}

export const movieReducer = (state = initState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case 'FETCH':
            return {
                ...state,
                movies: action.payload
            }
    
        default:
            return state;
    }
}