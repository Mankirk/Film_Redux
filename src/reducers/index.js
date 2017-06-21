import { combineReducers } from "redux";
import MovieReducer from "./movieReducer";
import UtilsReducer from "./utilsReducer";
import LightBoxReducer from "./lightboxReducer";
import ToggleLightBoxReducer from "./toggleLightBoxReducer";
import FetchReducer from "./fetchReducer";
import PageNrReducer from "./pageNrReducer";

const allReducers = combineReducers( {
    movies: MovieReducer,
    lightBoxData: LightBoxReducer,
    showingLightBox: ToggleLightBoxReducer,
    fetchData: FetchReducer,
    nrOfPages: PageNrReducer,
} );

export default allReducers;
