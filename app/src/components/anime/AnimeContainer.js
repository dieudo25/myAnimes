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
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Year</th>
                            <th>Created at</th>
                            <th>Updated at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animesState.animes.data.map((anime) => (
                            <>
                                <tr>
                                    <td>{ anime.attributes.title.en }</td>
                                    <td>{ truncate(anime.attributes.description.en, 200) }</td>
                                    <td>{ anime.attributes.year }</td>
                                    <td>{ formatDate(anime.attributes.createdAt) }</td>
                                    <td>{ formatDate(anime.attributes.updatedAt) }</td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </section>
        )
    }
}

export default AnimeContainer;