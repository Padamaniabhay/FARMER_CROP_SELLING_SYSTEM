import React from "react";
import Slider from "react-slick";
//components
import Carousal from "./Carousal"
import { NextArrow, PrevArrow } from "./CarousalArrow";


const categories = [
    {
        image: "https://www.microsave.net/wp-content/uploads/2020/07/Headeer-blog.jpg"
    },
    { image: "https://previews.123rf.com/images/serg_v/serg_v2008/serg_v200800038/153935609-ripe-vegetables-and-fruits-on-background-of-rural-landscape.jpg" }, {
        image: "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1638985497000/photosp/bda1e3ec-20e4-43dc-9474-c80e99175f7a/stock-photo-farm-landscape-agriculture-crop-onion-fresh-plantation-crops-farming-bda1e3ec-20e4-43dc-9474-c80e99175f7a.jpg"
    }, {
        image: "https://thumbs.dreamstime.com/z/happy-farmer-vegetables-front-field-landscape-smiling-caucasian-forty-years-old-hat-standing-proud-holding-wooden-box-41665113.jpg"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8NKt4GM16nx8jxyHM9v8NDHpEWsIQ6Bit8Q&usqp=CAU"
    },

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
        <div className="">
            <Slider {...settings}>
                {
                    categories.map((food) => (
                        <Carousal {...food} />
                    )
                    )
                }
            </Slider>
        </div>
    </>
}

export default HomeCarousal;