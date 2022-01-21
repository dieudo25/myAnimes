import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import  { useDispatch, useSelector } from 'react-redux';

import { selectedAnime, removeSelectedAnime } from '../../state/actions/animeActions';
import { AnimeActionTypes } from '../../state/constants/action-types';
import Spinner from '../basic/Spinner';
import AnimeCover from './AnimeCover';
import AnimeTags from './AnimeTags';
import AnimeAltTitles from './AnimeAltTitle';
import DataNotFound from '../basic/DataNotfound';

const AnimeDetail = () => {
    /* Fetch and Display the anime detail */

    const animeState = useSelector(state => state.anime);
    const dispatch = useDispatch();
    
    const params = useParams(); // url parameters
    const navigate = useNavigate();

    useEffect(() => {
        const ANIME_DETAIL_URL = `https://api.mangadex.org/manga/${ params.id }`;

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

        if (params.id && params.id !== "") fetchAnimeDetail();
        return () => {
            dispatch(removeSelectedAnime());
        }
    }, [params.id]);

    if (Object.keys(animeState).length === 0) {
        return <Spinner />;
    } else {
        const data = animeState.data.attributes;
        const animeId = animeState.data.id;
        const animeRelationships = animeState.data.relationships;
        const animeCover = animeRelationships.find(
            (relation) => relation.type === "cover_art"
        )
        console.log(animeCover.id);
        return (
            <section className="section-anime-detail grid border-2 border-main-500 shadow-lg ">
                <div className="bg-main-500 text-white h-[100px] text-center grid items-center px-5">
                    <h1 className="text-[30px]">
                        { 
                            data.title.en ||
                            data.altTitles.map((title) => (title.en))
                        }</h1>
                </div>
                <div className="anime-detail grid gap-5 m-auto max-h-[55vh] overflow-y-scroll scroll-bar w-full">
                    <div className="cover-container">
                        { (animeCover.id && animeId) 
                            ? 
                            <div className="img-container w-full max-w-600px md:w-[250px] m-auto md:mx-auto md:mt-10 md:mb-5">
                                <AnimeCover 
                                    animeId={ animeId }
                                    animeCoverId={ animeCover.id } 
                                />
                            </div>
                            :
                            <div>No Image</div>
                        }
                    </div>
                    <div className="alternative-title text-center text-main-500">
                        <AnimeAltTitles altTitles={data.altTitles} />
                    </div>
                    <div className="grid grid-cols-2 px-5 my-5">
                        <div className="text-center grid grid-cols-2 border-2 border-main-500 col-span-2 sm:col-span-1 mt-3 sm:mt-0">
                            <div className="bg-main-500 text-white p-2">
                                Type
                            </div>
                            <div className="p-2 capitalize">
                                { data.publicationDemographic ? data.publicationDemographic : <DataNotFound /> }
                            </div>
                        </div>
                        <div className="text-center grid grid-cols-2 border-2 border-main-500 col-span-2 sm:col-span-1 mt-3 sm:mt-0">
                            <div className="bg-main-500 text-white p-2">
                                Status
                            </div>
                            <div className="p-2 capitalize">
                                { data.status ? data.status : <DataNotFound /> }
                            </div>
                        </div>
                        <div className="mt-3 text-center col-span-2 grid grid-cols-2 border-2 border-main-500 items-center">
                            <div className="bg-main-500 text-white p-2">
                                Year of release
                            </div>
                            <div className="capitalize grid">
                                { data.year ? data.year : <DataNotFound /> }
                            </div>
                        </div>
                    </div>
                    <div className="w-fit-content m-auto grid grid-cols-2 sm:grid-cols-4 justify-center">
                            <AnimeTags tags={ data.tags } />
                        </div>
                    <div className="desc-container mb-10 px-5">
                        <p>{ data.description.en }</p>
                    </div>
                </div>
                <div className='anime-control bg-main-500 text-white grid h-[100px] items-center px-5'>
                    <div>
                        <button
                            onClick={ () => navigate(-1) }
                            className="grid grid-cols-2 bg-white text-main-500 py-2 px-4 w-[100px] hover:bg-main-900 hover:text-white transition"
                        >
                            <span className="material-icons w-[fit-content]">
                                arrow_back
                            </span>
                            <span className="w-[fit-content]">Back</span>
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}

export default AnimeDetail;