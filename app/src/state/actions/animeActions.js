import { AnimeActionTypes } from "../constants/action-types";

export const setAnimes = (animes) => {
    /* Action for updating the anime list state with the dispatched data*/
    return {
        type: AnimeActionTypes.SET_ANIMES,
        payload: animes
    };
};

export const selectedAnime = (anime) => {
    /* Action for updating the anime detail state with the dispatched data*/
    return {
        type: AnimeActionTypes.SELECTED_ANIME,
        payload: anime
    };
};

export const removeSelectedAnime = () => {
    /* Action for clearing the anime detail state*/
    return {
        type: AnimeActionTypes.REMOVE_SELECTED_ANIME,
    };
};

export const selectedAnimeCover = (animeCover) => {
    /* Action for updating the anime cover art state with the dispatched data*/
    return {
        type: AnimeActionTypes.SELECTED_ANIME_COVER,
        payload: animeCover
    };
};

export const removeSelectedAnimeCover = () => {
    /* Action for clearing the anime cover art state*/
    return {
        type: AnimeActionTypes.REMOVE_SELECTED_ANIME_COVER,
    };
};