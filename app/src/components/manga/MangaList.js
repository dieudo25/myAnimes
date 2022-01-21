import React, { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { setMangas } from '../../state/actions/animeActions';
import { MangaActionTypes } from "../../state/constants/action-types";
import MangaListContainer from "./MangaListContainer";
import Spinner from "../basic/Spinner";
import MangaPagination from "./MangaPagination";

const MangaList = () => {
    /* Fetch the list of mangas */

    const animesState = useSelector(state => state.allMangas);
    const offset = animesState.offset;
    const limit = animesState.limit; // Number of mangas per page
    const dispatch = useDispatch();

    useEffect(() => {
        const ANIME_LIST_URL = "https://api.mangadex.org/manga";
        const params = { 
            limit: limit,
            offset: offset,
        }

        const fetchMangasList = async () => {
            const response = await axios
                .get(ANIME_LIST_URL, { params })
                .catch((err) => {
                    dispatch({
                        type: MangaActionTypes.ANIME_ERRORS,
                        payload: err,
                    })
                }
            );
            dispatch(setMangas(response.data));
        };

        fetchMangasList();
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
                        rel="noreferrer" 
                        className="text-main-500 ml-1"
                    >
                            MangaDex API
                    </a>
                </h2>
                <MangaListContainer />
                <MangaPagination />
            </>
        );
    }
}

export default MangaList;