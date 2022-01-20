import React from "react";

const AnimeTags = ({ tags }) => {
    const tagStyle = "bg-main-500 px-3 py-2 mb-2 ml-3 rounded-lg text-white text-center text-[12px] font-bold";

    return (
        tags.map((tag) => (
            <span key={ tag.id } className={ tagStyle }>
                { tag.attributes.name.en }
            </span>
        )) 
    )
};

export default AnimeTags;