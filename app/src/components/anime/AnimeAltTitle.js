import React from "react";

const AnimeAltTitles = ({ altTitles}) => {
    return (
        altTitles.map((title, index) => (
            <h3 key={ `title-${index}` }>
                { title.en || title.ja }
            </h3>
        ))
    )
};

export default AnimeAltTitles;