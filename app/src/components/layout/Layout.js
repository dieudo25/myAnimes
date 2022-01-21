import React from "react";
import Header from "./Header";

const Layout = ({ children }) => (
    /* Layout of the app */

    <>
        <Header />
        <main className="section-main mx-auto my-[50px] max-w-[80%] w-[80%]">
            { children }
        </main>
    </>
)

export default Layout;