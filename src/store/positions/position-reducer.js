import { ADD_POSITIONS } from "./position-actions";

export const poitionReducer = (state=[], action) => {
    switch(action.type) {
        case ADD_POSITIONS: {
            return action.positions
        }
        default: {
            return state
        }
    }
}