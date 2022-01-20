import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import  { useDispatch, useSelector } from 'react-redux';

import { selectedAnime, removeSelectedAnime } from '../../state/actions/animeActions';
import { AnimeActionTypes } from '../../state/constants/action-types';
import Spinner from '../basic/Spinner';
import AnimeCover from './AnimeCover';
import AnimeTags from './AnimeTags';
import AnimeAltTitles from './AnimeAltTitle';

const AnimeDetail = () => {
    const animeState = useSelector(state => state.anime);
    const dispatch = useDispatch();

    const param = useParams();

    // Style
    const headerStyle = "bg-main-500 text-white h-[100px] text-center grid items-center";
    const h1Style = "text-[30px]";
    const animeCoverContainerStyle = {
        xs: "w-fit-content m-auto flex flex-wrap",
    }


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
        const animeId = animeState.data.id
        const animeCoverId = animeState.data.relationships[2].id
        console.log("data", data)
        return (
            <section className="section-anime-detail grid border-2 border-main-500">
                <div className={ headerStyle }>
                    <h1 className={ h1Style }>{ data.title.en }</h1>
                </div>
                <div className="anime-detail grid gap-5 m-auto">
                    <div className="cover-container">
                        { (animeCoverId && animeId) 
                            ? 
                            <div className="img-container w-full max-w-600px md:w-[250px] m-auto md:mx-auto md:mt-10 md:mb-5">
                                <AnimeCover 
                                    animeId={ animeId }
                                    animeCoverId={ animeCoverId } 
                                />
                            </div>
                            :
                            <div>No Image</div>
                        }
                    </div>
                    <div className="alternative-title text-center text-main-500">
                        <AnimeAltTitles altTitles={data.altTitles} />
                    </div>
                    <div className={`${ animeCoverContainerStyle.xs } `}>
                            <AnimeTags tags={ data.tags } />
                        </div>
                    <div className="desc-container px-5">
                        <p>{ data.description.en }</p>
                    </div>

                </div>
            </section>
        )
    }
}

export default AnimeDetail;