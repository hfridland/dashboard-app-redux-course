import { combineReducers } from "redux";
import { poitionReducer } from "./positions/position-reducer";
import { filterReduser } from "./filters/filter-reducer";

export const rootReducer =combineReducers({
    positions: poitionReducer,
    filters: filterReduser
})