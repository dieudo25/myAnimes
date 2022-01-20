import { AnimeActionTypes } from "../constants/action-types";

const initialState = {
    animes: [],
    limit: 5,
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
        case AnimeActionTypes.NEXT_PAGE:
            return {
                ...state,
                offset: state.animes.offset + state.limit
            };
        case AnimeActionTypes.PREV_PAGE:
            return {
                ...state,
                offset: state.animes.offset - state.limit
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

export const selectedAnimeCoverReducer = (state={}, {type, payload}) => {
    // For Anime cover art
    switch (type) {
        case AnimeActionTypes.SELECTED_ANIME_COVER:
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
        case AnimeActionTypes.REMOVE_SELECTED_ANIME_COVER:
            return {};
        default:
            return state;
    }
}