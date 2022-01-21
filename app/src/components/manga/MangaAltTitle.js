import React from "react";

const MangaAltTitles = ({ altTitles}) => {
    /* Display the manga alternative title in french and japenese*/
    return (
        altTitles.map((title, index) => (
            <h3 key={ `title-${index}` }>
                { title.en || title.ja }
            </h3>
        ))
    )
};

export default MangaAltTitles;