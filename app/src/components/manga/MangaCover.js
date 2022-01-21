import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';

import { removeSelectedMangaCover, selectedMangaCover } from "../../state/actions/animeActions";
import { MangaActionTypes } from '../../state/constants/action-types';
import Spinner from '../basic/Spinner';

const MangaCover = ({ animeCoverId, animeId }) => {
    /* 
        Display the manga cover art 
        props :
            - animeCoverId: the id of the manga cover
            - animeId: the id of the manga
    */

    const animeCoverState = useSelector(state => state.animeCover);
    const dispatch = useDispatch();

    useEffect(() => {
        const ANIÙE_COVER_URL = `https://api.mangadex.org/cover/${ animeCoverId }`;

        const fetchMangaCover = async () => {
            const response = await axios
                .get(ANIÙE_COVER_URL)
                .catch((err) => {
                    dispatch({
                        type: MangaActionTypes.ANIME_ERRORS,
                        payload: err,
                    });
                });
            dispatch(selectedMangaCover(response.data));
        }

        fetchMangaCover();
        return () => {
            dispatch(removeSelectedMangaCover)
        }
    }, [animeCoverId]);

    if (Object.keys(animeCoverState).length === 0) {
        return <Spinner />;
    } else {
        const data = animeCoverState.data.attributes
        
        return (
            <img src={ `https://uploads.mangadex.org/covers/${ animeId }/${ data.fileName }` } />
        )
    }
}

export default MangaCover;