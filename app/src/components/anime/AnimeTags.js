import React from "react";

const AnimeTags = ({ tags }) => {
    /* 
        Display a list of the anime tags
        props:
            tags: a list of the anime tags
    */
    
    const tagStyle = "bg-main-500 py-1 min-w-[85px] h-[fit-content] mb-2 ml-3 rounded-lg text-white text-center text-[12px] font-bold";

    return (
        tags.map((tag) => (
            <span key={ tag.id } className={ tagStyle }>
                { tag.attributes.name.en }
            </span>
        )) 
    )
};

export default AnimeTags;