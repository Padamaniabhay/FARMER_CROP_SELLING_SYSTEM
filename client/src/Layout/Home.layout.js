import React from "react";


//components
import Navbar from "../Components/Navbar"
import Footer from "../Components/footer/footer"

const HomeLayout = (props) => {
    return (
        <>
            <div className="fixed bg-fixed z-40 w-full"><Navbar /></div>
            <div className="pt-14">{props.children}</div>
            <Footer/>
        </>
    )
};

export default HomeLayout; 
