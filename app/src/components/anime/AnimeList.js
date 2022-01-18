import React, { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAnimes } from '../../state/actions/animeActions';
import { AnimeActionTypes } from "../../state/constants/action-types";

const AnimeList = () => {
    const animes = useSelector(state => state);
    const dispatch = useDispatch();
    const headers = {
        "Content-Type": "application/json",
    }
    const ANIME_LIST_URL = "https://api.mangadex.org/manga"

    const fetchAnimes = async () => {
        const response = await axios
            .get(ANIME_LIST_URL, headers, {crossdomain: true})
            .catch((err) => {
                dispatch({
                    type: AnimeActionTypes.AINME_ERRORS,
                    payload: err,
                })
                console.log("Error", err);
            });
            dispatch(setAnimes(response));
            console.log(response);
    };

    useEffect(() => {
        fetchAnimes();
    }, []);
    console.log("animes", animes);

    return (
        <div className="container">
            <h1>AnimeList</h1>
        </div>
    )
}

export default AnimeList;