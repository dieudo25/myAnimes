import { MangaActionTypes } from "../constants/Action-types";

const initialState = {
    mangas: [],
    limit: 5,
    offset: 0,
    loading: true
}


export const AnimeReducer = (state=initialState, { type, payload }) => {
    // For mangas list
    switch(type) {
        case MangaActionTypes.SET_ANIMES:
            return {
                ...state,
                mangas: payload,
                loading: false
            };
        case MangaActionTypes.ANIME_ERRORS:
            return {
                error: payload,
                loading: false
            };
        case MangaActionTypes.NEXT_PAGE:
            return {
                ...state,
                offset: state.mangas.offset === state.mangas.total - state.limit ? state.mangas.offset : state.mangas.offset + state.limit
            };
        case MangaActionTypes.PREV_PAGE:
            return {
                ...state,
                offset: state.mangas.offset > 0 ? state.mangas.offset - state.limit : 0
            };    
        default:
            return state;
    }
}

export const selectedMangaReducer = (state={}, {type, payload}) => {
    // For manga detail
    switch (type) {
        case MangaActionTypes.SELECTED_ANIME:
            return {
                ...state,
                ...payload,
                loading: false
            };
        case MangaActionTypes.ANIME_ERRORS:
            return {
                error: payload,
                loading: false,
            };
        case MangaActionTypes.REMOVE_SELECTED_ANIME:
            return {};
        default:
            return state;
    }
}

export const selectedMangaCoverReducer = (state={}, {type, payload}) => {
    // For Manga cover art
    switch (type) {
        case MangaActionTypes.SELECTED_ANIME_COVER:
            return {
                ...state,
                ...payload,
                loading: false
            };
        case MangaActionTypes.ANIME_ERRORS:
            return {
                error: payload,
                loading: false,
            };
        case MangaActionTypes.REMOVE_SELECTED_ANIME_COVER:
            return {};
        default:
            return state;
    }
}