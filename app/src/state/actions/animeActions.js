import { MangaActionTypes } from "../constants/action-types";

export const setMangas = (mangas) => {
    /* Action for updating the manga list state with the dispatched data*/
    return {
        type: MangaActionTypes.SET_ANIMES,
        payload: mangas
    };
};

export const selectedManga = (manga) => {
    /* Action for updating the manga detail state with the dispatched data*/
    return {
        type: MangaActionTypes.SELECTED_ANIME,
        payload: manga
    };
};

export const removeSelectedManga = () => {
    /* Action for clearing the manga detail state*/
    return {
        type: MangaActionTypes.REMOVE_SELECTED_ANIME,
    };
};

export const selectedMangaCover = (animeCover) => {
    /* Action for updating the manga cover art state with the dispatched data*/
    return {
        type: MangaActionTypes.SELECTED_ANIME_COVER,
        payload: animeCover
    };
};

export const removeSelectedMangaCover = () => {
    /* Action for clearing the manga cover art state*/
    return {
        type: MangaActionTypes.REMOVE_SELECTED_ANIME_COVER,
    };
};