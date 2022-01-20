import { combineReducers } from "redux";
import { 
    animeReducer, 
    selectedAnimeReducer, 
    selectedAnimeCoverReducer 
} from "./animeReducer";

const rootReducers = combineReducers({
    allAnimes: animeReducer,
    anime: selectedAnimeReducer,
    animeCover: selectedAnimeCoverReducer
});

export default rootReducers;