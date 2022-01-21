import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import Spinner from '../basic/Spinner';
import DataNotFound from '../basic/DataNotfound';

import truncate from '../../utils/truncate';
import AnimeTags from './AnimeTags';

const AnimeListContainer = () => {
    /* Display the list of animes in a table */

    const animesState = useSelector(state => state.allAnimes);
    

    if (animesState.loading) {
        return <Spinner />;
    } else {
        return (
            <section className="section-anime overflow-auto border-2 border-main-500 max-h-[65vh] scroll-bar">
                <table className="">
                    <thead className="bg-main-500 text-white h-[100px]">
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Year of release</th>
                            <th>Genre</th>
                            <th>Type</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animesState.animes.data.map((anime) => {
                            const data = anime.attributes
                            return (
                                <tr  
                                    key={anime.id}
                                    className="h-[200px] hover:bg-gray-100 transition"
                                >
                                    <td className="py-5 px-3 min-w-[200px] border-b-2 border-main-500  text-center font-bold">
                                        <Link 
                                            to={`/anime/${anime.id}`} 
                                            className="hover:text-main-500"
                                        >
                                            { data.title.en ? data.title.en : <DataNotFound /> }
                                        </Link>
                                    </td>
                                    <td className="py-5 px-3 border-b-2 border-main-500  min-w-[400px]">
                                        <div>

                                            <span>
                                                { data.description.en ? truncate(data.description.en, 200) : <DataNotFound /> }
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-5 px-3 min-w-[200px] border-b-2 border-main-500  text-center">
                                        { data.year ? data.year : <DataNotFound /> }
                                    </td>
                                    <td className="py-5 px-3 min-w-[200px] border-b-2 border-main-500  text-center">
                                        <div className="grid grid-cols-2 h-full">
                                            <AnimeTags tags={ data.tags } />
                                        </div>
                                    </td>
                                    <td className="py-5 px-3 min-w-[200px] border-b-2 border-main-500  text-center capitalize">
                                        { data.publicationDemographic ? data.publicationDemographic : <DataNotFound /> }
                                    </td>
                                    <td className="py-5 px-3 min-w-[200px] border-b-2 border-main-500  text-center capitalize">
                                        { data.status ? data.status : <DataNotFound /> }
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        );
    }
}

export default AnimeListContainer;