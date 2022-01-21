import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    /* Display the header of the app */

    <section className="nav-section py-5 bg-main-500 text-white text-center">
        <div className="container max-w-[960px] m-auto">
            <div className="nav-logo">
                <h2 className="text-[40px]">
                    <Link to="/">MyMangas</Link> 
                </h2>
            </div>
        </div>
    </section>
);

export default Header;