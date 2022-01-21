import React from "react";
import { useDispatch } from 'react-redux';
import { AnimeActionTypes } from "../../state/constants/action-types";


const AnimePagination = () => {
    /* Display nav for paginating through the animes list */

    const dispatch = useDispatch();
    
    return (
        <section className="pagination-container grid grid-cols-2 mt-3">
            <div 
                className="bg-main-500 h-20 hover:bg-main-900 border-r-2 transition cursor-pointer grid items-center justify-center"
                onClick={() => dispatch({
                    type: AnimeActionTypes.PREV_PAGE,
                })}
            >
                <span className="material-icons text-white text-[50px]">
                    chevron_left
                </span>
            </div>
            <div 
                className="bg-main-500 h-20 hover:bg-main-900 border-l-2 transition cursor-pointer grid items-center justify-center"
                onClick={() => dispatch({
                    type: AnimeActionTypes.NEXT_PAGE,
                })}
            >
                <span className="material-icons text-white text-[50px]">
                    chevron_right
                </span>
            </div>
        </section>
    )
};

export default AnimePagination;