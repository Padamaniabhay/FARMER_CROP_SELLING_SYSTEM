import React from "react";
import Slider from "react-slick";
//components
import Carousal from "./Carousal"
import { NextArrow, PrevArrow } from "./CarousalArrow";


const categories = [
    {
        image: "https://www.microsave.net/wp-content/uploads/2020/07/Headeer-blog.jpg"
    },
    { image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1499&q=80" }, {
        image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=682&q=80"
    }, {
        image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    }
]


const HomeCarousal = () => {

    const settings = {
        arrows: true,
        infinite: true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return <>
        <div className="w-full h-full">
            <Slider {...settings}>
                {
                    categories.map((food) => (
                        <Carousal {...food}  key={food.image}/>
                    )
                    )
                }
            </Slider>
        </div>
    </>
}

export default HomeCarousal;