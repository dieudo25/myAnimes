import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import  { useDispatch, useSelector } from 'react-redux';

import { selectedAnime, removeSelectedAnime } from '../../state/actions/animeActions';
import { AnimeActionTypes } from '../../state/constants/action-types';
import Spinner from '../basic/Spinner';

const AnimeDetail = () => {
    const animeState = useSelector(state => state.anime);
    const dispatch = useDispatch();

    const param = useParams();

    const headerStyle = "bg-main-500 text-white h-[100px] text-center grid items-center";
    const h1Style = "text-[30px]";


    useEffect(() => {
        const ANIME_DETAIL_URL = `https://api.mangadex.org/manga/${ param.id }`;

        const fetchAnimeDetail = async () => {
            const response = await axios
                .get(ANIME_DETAIL_URL)
                .catch((err) => {
                    dispatch({
                        type: AnimeActionTypes.ANIME_ERRORS,
                        payload: err,
                    });
                });
            dispatch(selectedAnime(response.data));
        };

        if (param.id && param.id !== "") fetchAnimeDetail();
        return () => {
            dispatch(removeSelectedAnime());
        }
    }, [param.id]);

    if (Object.keys(animeState).length === 0) {
        return <Spinner />;
    } else {
        const data = animeState.data.attributes;
        return (
            <section className="section-anime-detail grid">
                <div className={ headerStyle }>
                    <h1 className={ h1Style }>{ data.title.en }</h1>
                </div>
                <div className="">
                    
                </div>
            </section>
        )
    }
}

export default AnimeDetail;