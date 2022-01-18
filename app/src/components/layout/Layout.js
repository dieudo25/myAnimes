import React from "react";
import Header from "./Header";

const Layout = ({ children }) => (
    <>
        <Header />
        <main className="section-main mx-auto my-[50px] max-w-[960px] w-[80%]">
            { children }
        </main>
    </>
)

export default Layout;