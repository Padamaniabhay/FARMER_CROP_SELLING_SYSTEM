import React from "react";


//components
import Navbar from "../Components/Navbar"
import Footer from "../Components/footer/footer"

const CropItemLayout = (props) => {
    return (
        <>
            <div className="fixed bg-fixed z-40 w-full"><Navbar /></div>
            <div className='flex flex-col items-center py-20'>
                <h3 className='text-2xl font-semibold px-3 py-4'>CONSUMER</h3>
                <div className='text-lg font-medium px-3 py-4'>No need to visit field to get grains!!! Just order here and and get all kinds of garins deliverd at your doorstep. Why to wait? Go and order.</div>
                <div className="container mx-auto px-4 lg:px-20">{props.children}</div>
                {/* <div className='bg-crop-400 w-full flex justify-center text-xl items-center font-extrabold py-1 rounded-lg text-pink-600'>Finish</div> */}
                <Footer/>
            </div>
        </>
    )
};

export default CropItemLayout; 
