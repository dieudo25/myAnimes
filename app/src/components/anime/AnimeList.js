import React, { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { setAnimes } from '../../state/actions/animeActions';
import { AnimeActionTypes } from "../../state/constants/action-types";
import AnimeListContainer from "./AnimeListContainer";
import Spinner from "../basic/Spinner";

const AnimeList = () => {
    const animesState = useSelector(state => state.allAnimes);
    const offset = animesState.offset;
    const limit = animesState.limit;
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
    } else if (!animesState.loading && animesState.error) {
        return (
            <>
                <h1>{ JSON.stringify(animesState.error.toJSON) }</h1>
                <div className="">
                    { JSON.stringify(animesState.error.toJSON) }
                </div>
            </>
        )
    } else {
        return (
            <>
                <AnimeListContainer />
                <section className="pagination-container grid grid-cols-2 max-w-[960px]">
                    <div 
                        className="bg-main-500 h-20 w-20"
                        onClick={() => dispatch({
                            type: AnimeActionTypes.PREV_PAGE,
                        })}
                    >

                    </div>
                    <div 
                        className="bg-second-500 h-20 w-20"
                        onClick={() => dispatch({
                            type: AnimeActionTypes.NEXT_PAGE,
                        })}
                    >

                    </div>
                </section>
            </>
        );
    }
}

export default AnimeList;