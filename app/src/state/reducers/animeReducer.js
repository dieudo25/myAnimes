import { AnimeActionTypes } from "../constants/action-types";

const initialState = {
    ainmes: [],
    loading: true
}


export const animeReducer = (state=initialState, { type, payload }) => {
    // For animes list
    switch(type) {
        case AnimeActionTypes.SET_ANIMES:
            return {
                ...state,
                ainmes: payload,
                loading: false
            };
        case AnimeActionTypes.AINME_ERRORS:
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
        case AnimeActionTypes.AINME_ERRORS:
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