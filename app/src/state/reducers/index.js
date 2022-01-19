import { combineReducers } from "redux";
import { animeReducer, selectedAnimeReducer } from "./animeReducer";

const rootReducers = combineReducers({
    allAnimes: animeReducer,
    anime: selectedAnimeReducer,
});

export default rootReducers;