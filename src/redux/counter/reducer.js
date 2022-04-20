import { DECREASE, INCREASE } from "./types";

export const initState = {
    counter: 5
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            }
    
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
            
        default:
            return state;
    }
}