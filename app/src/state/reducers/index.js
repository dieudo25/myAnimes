import { combineReducers } from "redux";
import { animeReducer, selectedAnimeReducer } from "./animeReducer";

const reducers = combineReducers({
    allAnimes: animeReducer,
    anime: selectedAnimeReducer,
});

export default reducers;