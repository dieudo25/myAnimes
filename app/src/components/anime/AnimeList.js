import React, { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAnimes } from '../../state/actions/animeActions';
import { AnimeActionTypes } from "../../state/constants/action-types";
import AnimeContainer from "./AnimeContainer";

const AnimeList = () => {
    const animes = useSelector(state => state.allAnimes);
    const dispatch = useDispatch();
    const headers = {
        "Content-Type": "application/json",
    }
    const ANIME_LIST_URL = "https://api.mangadex.org/manga"

    const fetchAnimesList = async () => {
        const response = await axios
            .get(ANIME_LIST_URL, { headers: headers })
            .catch((err) => {
                dispatch({
                    type: AnimeActionTypes.ANIME_ERRORS,
                    payload: err,
                })
                console.log("Error", err);
            });
            dispatch(setAnimes(response.data));
    };

    useEffect(() => {
        fetchAnimesList();
    }, []);

    return (
        <div className="container grid">
            <AnimeContainer />
        </div>
    )
}

export default AnimeList;