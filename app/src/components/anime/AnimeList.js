import React, { useEffect } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { setAnimes } from '../../state/actions/animeActions';
import { AnimeActionTypes } from "../../state/constants/action-types";
import AnimeListContainer from "./AnimeListContainer";

const AnimeList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const ANIME_LIST_URL = "https://api.mangadex.org/manga";

        const fetchAnimesList = async () => {
            const response = await axios
                .get(ANIME_LIST_URL)
                .catch((err) => {
                    dispatch({
                        type: AnimeActionTypes.ANIME_ERRORS,
                        payload: err,
                    })
                }
            );
            dispatch(setAnimes(response.data));
        };

        fetchAnimesList();
    }, []);

   return <AnimeListContainer />;
}

export default AnimeList;