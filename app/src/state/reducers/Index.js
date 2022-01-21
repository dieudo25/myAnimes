import { combineReducers } from "redux";
import { 
    AnimeReducer, 
    selectedMangaReducer, 
    selectedMangaCoverReducer 
} from "./AnimeReducer";

const rootReducers = combineReducers({
    allMangas: AnimeReducer,
    manga: selectedMangaReducer,
    animeCover: selectedMangaCoverReducer
});

export default rootReducers;