import { combineReducers } from "redux";
import MovieReducer from "./movieReducer";
import UtilsReducer from "./utilsReducer";
import FetchReducer from "./fetchReducer";

const allReducers = combineReducers( {
    movies: MovieReducer,
    utils: UtilsReducer,
} );

export default allReducers;
