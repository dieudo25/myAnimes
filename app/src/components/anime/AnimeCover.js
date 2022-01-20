import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';

import { removeSelectedAnimeCover, selectedAnimeCover } from "../../state/actions/animeActions";
import { AnimeActionTypes } from '../../state/constants/action-types';
import Spinner from '../basic/Spinner';

const AnimeCover = ({ animeCoverId, animeId }) => {
    const animeCoverState = useSelector(state => state.animeCover);
    const dispatch = useDispatch();

    useEffect(() => {
        const ANIÙE_COVER_URL = `https://api.mangadex.org/cover/${ animeCoverId }`;

        const fetchAnimeCover = async () => {
            const response = await axios
                .get(ANIÙE_COVER_URL)
                .catch((err) => {
                    dispatch({
                        type: AnimeActionTypes.ANIME_ERRORS,
                        payload: err,
                    });
                });
            dispatch(selectedAnimeCover(response.data));
        }

        fetchAnimeCover();
        return () => {
            dispatch(removeSelectedAnimeCover)
        }
    }, []);

    if (Object.keys(animeCoverState).length === 0) {
        return <Spinner />;
    } else {
        const data = animeCoverState.data.attributes
        
        return (
            <img src={ `https://uploads.mangadex.org/covers/${ animeId }/${ data.fileName }` } />
        )
    }
}

export default AnimeCover;