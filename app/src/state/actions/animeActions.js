import { AnimeActionTypes } from "../constants/action-types";

export const setAnimes = (animes) => {
    return {
        type: AnimeActionTypes.SET_ANIMES,
        payload: animes
    };
};

export const selectedAnime = (anime) => {
    return {
        type: AnimeActionTypes.SELECTED_ANIME,
        payload: anime
    };
};

export const removeSelectedAnime = () => {
    return {
        type: AnimeActionTypes.REMOVE_SELECTED_ANIME,
    };
};