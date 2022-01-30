import React from "react";


//component
import HomeCarousal from "../Components/HomeCarousal";
import HomeCategory from "../Components/HomeCategory";


const Home = () => {

    return <>
        <div className="my-5">
            <HomeCarousal/>
            <HomeCategory/>
        </div>

    </>
}

export default Home;