import { combineReducers } from "redux";
import { 
    animeReducer, 
    selectedMangaReducer, 
    selectedMangaCoverReducer 
} from "./animeReducer";

const rootReducers = combineReducers({
    allMangas: animeReducer,
    manga: selectedMangaReducer,
    animeCover: selectedMangaCoverReducer
});

export default rootReducers;