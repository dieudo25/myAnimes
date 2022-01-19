import { AnimeActionTypes } from "../constants/action-types";

const initialState = {
    animes: [],
    loading: true
}


export const animeReducer = (state=initialState, { type, payload }) => {
    // For animes list
    switch(type) {
        case AnimeActionTypes.SET_ANIMES:
            return {
                ...state,
                animes: payload,
                loading: false
            };
        case AnimeActionTypes.ANIME_ERRORS:
            return {
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}

export const selectedAnimeReducer = (state={}, {type, payload}) => {
    // For anime detail
    switch (type) {
        case AnimeActionTypes.SELECTED_ANIME:
            return {
                ...state,
                ...payload,
                loading: false
            };
        case AnimeActionTypes.ANIME_ERRORS:
            return {
                error: payload,
                loading: false,
            };
        case AnimeActionTypes.REMOVE_SELECTED_ANIME:
            return {};
        default:
            return state;
    }
}