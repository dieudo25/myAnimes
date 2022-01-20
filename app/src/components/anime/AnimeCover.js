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
        // console.log("data filename", data.fileName);
        // console.log("animeId", animeId);
        // console.log("animeCoverId", animeCoverId);
        return (
            <div className="img-container">
                <img href={ `https://uploads.mangadex.org/covers/${ animeId }/${ data.fileName }` } />
            </div>
        )
    }
}

export default AnimeCover;

/* 

https://uploads.mangadex.org/covers/8f8b7cb0-7109-46e8-b12c-0448a6453dfa/0d79ccf5-f0a8-43ba-b29b-13ada4d991da.jpg

https://uploads.mangadex.org/covers/8f8b7cb0-7109-46e8-b12c-0448a6453dfa/2f0ef6e6-d99c-476c-9265-c04a9a0b0c12.jpg 

*/