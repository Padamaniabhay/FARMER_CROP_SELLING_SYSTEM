import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

//components
import Vegetables from "../Components/Vegetables";
import Fruit from "../Components/Fruit";
import Cereals from "../Components/Cereals";

const Home = () => {

    const { type } = useParams();

    return <>
        <div className="my-5">
            {type === "vegetables" && <Vegetables />}
            {type === "fruit" && <Fruit />}
            {type === "cereals" && <Cereals />}
        </div>

    </>
}

export default Home;