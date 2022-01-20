import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import Spinner from '../basic/Spinner';
import AnimeCover from './AnimeCover';
import DataNotFound from '../basic/DataNotfound';

import truncate from '../../utils/truncate';
import AnimeTags from './AnimeTags';

const AnimeListContainer = () => {
    const animesState = useSelector(state => state.allAnimes);

    const theadStyle = "bg-main-500 text-white h-[100px]";
    const trStyle = "h-[200px]";
    const tdStyle = "py-5 px-3 min-w-[120px] border-b-2 border-main-500";
    const tagsContainer = "grid grid-cols-1 h-full";
    const tdLinkStyle = "hover:text-main-500";
    

    if (animesState.loading) {
        return <Spinner />;
    } else {
        return (
            <section className="section-anime overflow-x-scroll border-2 border-main-500 scroll-bar">
                <table className="">
                    <thead className={ theadStyle }>
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
                                    className={ trStyle }
                                >
                                    <td className={ `${ tdStyle } text-center` }>
                                        {/* { animeCoverId && anime.id && 
                                            <AnimeCover 
                                                animeId={ anime.id }
                                                animeCoverId={ animeCoverId } 
                                            />
                                        } */}
                                        <Link 
                                            to={`/anime/${anime.id}`} 
                                            className={ tdLinkStyle }
                                        >
                                            { data.title.en ? data.title.en : <DataNotFound /> }
                                        </Link>
                                    </td>
                                    <td className={ `${ tdStyle } min-w-[200px]` }>
                                        <div>

                                            <span>
                                                { data.description.en ? truncate(data.description.en, 200) : <DataNotFound /> }
                                            </span>
                                        </div>
                                    </td>
                                    <td className={ `${ tdStyle } text-center` }>
                                        { data.year ? data.year : <DataNotFound /> }
                                    </td>
                                    <td className={ `${ tdStyle } text-center` }>
                                        <div className={ tagsContainer }>
                                            <AnimeTags tags={ data.tags } />
                                        </div>
                                    </td>
                                    <td className={ `${ tdStyle } text-center capitalize` }>
                                        { data.publicationDemographic ? data.publicationDemographic : <DataNotFound /> }
                                    </td>
                                    <td className={ `${ tdStyle } text-center capitalize` }>
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