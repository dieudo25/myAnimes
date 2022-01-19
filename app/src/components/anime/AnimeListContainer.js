import React from 'react';
import { useSelector } from 'react-redux';

import Spinner from '../basic/Spinner';

import truncate from '../../utils/truncate';
import formatDate from '../../utils/formatDate';

const AnimeContainer = () => {
    const animesState = useSelector(state => state.allAnimes);
    console.log("animeContainer", animesState)

    if (animesState.loading) {
        return <Spinner />
    } else {
        return (
            <section className="section-anime">
                <table className="">
                    <thead className="bg-main-500 text-white h-[100px]">
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Year of release</th>
                            <th>Created at</th>
                            <th>Updated at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animesState.animes.data.map((anime, index) => {
                            const data = anime.attributes
                            return (
                                <>
                                    <tr className={index % 2 == 0 && "bg-gray-100"}>
                                        <td className="py-5 px-3 min-w-[120px]">{ data.title.en }</td>
                                        <td className="py-5 px-3 min-w-[120px]">{ truncate(data.description.en, 200) }</td>
                                        <td className="py-5 px-3 min-w-[120px]">{ data.year }</td>
                                        <td className="py-5 px-3 min-w-[120px]">{ formatDate(data.createdAt) }</td>
                                        <td className="py-5 px-3 min-w-[120px]">{ formatDate(data.updatedAt) }</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </section>
        )
    }
}

export default AnimeContainer;