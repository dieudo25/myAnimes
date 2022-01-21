import React, { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { setAnimes } from '../../state/actions/animeActions';
import { AnimeActionTypes } from "../../state/constants/action-types";
import AnimeListContainer from "./AnimeListContainer";
import Spinner from "../basic/Spinner";
import AnimePagination from "./AnimePagination";

const AnimeList = () => {
    /* Fetch the list of animes */

    const animesState = useSelector(state => state.allAnimes);
    const offset = animesState.offset;
    const limit = animesState.limit; // Number of animes per page
    const dispatch = useDispatch();

    useEffect(() => {
        const ANIME_LIST_URL = "https://api.mangadex.org/manga";
        const params = { 
            limit: limit,
            offset: offset,
        }

        const fetchAnimesList = async () => {
            const response = await axios
                .get(ANIME_LIST_URL, { params })
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
    }, [offset]);

    if (animesState.loading) {
        return <Spinner />;
    } else {
        return (
            <>
                <h2 className="text-center mb-5 font-bold">
                    Display a list of mangas from the 
                    <a 
                        href="https://api.mangadex.org/docs.html" 
                        target="_blank" 
                        className="text-main-500 ml-1"
                    >
                            MangaDex API
                    </a>
                </h2>
                <AnimeListContainer />
                <AnimePagination />
            </>
        );
    }
}

export default AnimeList;