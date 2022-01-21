import React from "react";
import { BallTriangle } from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = () => (
    /* Display spinnner animation while fetching the api data */

    <section className="section-spinner grid items-center m-auto w-[80px] h-[50vh] sm:h-[65vh]">
        <div className="h-[80px]">
            <BallTriangle color="#9F3636" height={80} width={80} />
        </div>
    </section> 
);

export default Spinner;