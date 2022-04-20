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