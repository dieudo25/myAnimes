import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { MangaActionTypes } from "../../state/constants/Action-types";


const MangaPagination = () => {
    /* Display nav for paginating through the mangas list */

    const AllmangasState = useSelector(state => state.allMangas);
    const offset = AllmangasState.offset;
    const limit = AllmangasState.limit; 
    const total = AllmangasState.mangas.total;
    console.log("total", total) 
    const dispatch = useDispatch();
    
    return (
        <section className="pagination-container grid grid-cols-2 mt-3">
            <div 
                className={ `${ offset === 0 ? "bg-gray-400" : "bg-main-500 hover:bg-main-900 cursor-pointer" } h-20 border-r-2 transition grid items-center justify-center` }
                onClick={() => dispatch({
                    type: MangaActionTypes.PREV_PAGE,
                })}
            >
                <span className="material-icons text-white text-[50px]">
                    chevron_left
                </span>
            </div>
            <div 
                className={ `${ offset === total - limit ? "bg-gray-400" : "bg-main-500 hover:bg-main-900 cursor-pointer" } h-20 border-r-2 transition grid items-center justify-center` }
                onClick={() => dispatch({
                    type: MangaActionTypes.NEXT_PAGE,
                })}
            >
                <span className="material-icons text-white text-[50px]">
                    chevron_right
                </span>
            </div>
        </section>
    )
};

export default MangaPagination;