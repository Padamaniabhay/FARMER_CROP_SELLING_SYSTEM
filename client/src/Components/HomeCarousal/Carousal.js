import React from "react";

const CarousalCard = ({image})=>{
    return <>
        <div className="bg-white shadow w-full max-h-screen overflow-hidden overflow-x-hidden">
            <div className="w-full h-full">
                <img 
                src={image} 
                alt="crop"
                className="w-full h-full rounded-xl"
                />
            </div>
        </div>
    </>
}


const Carousal = (props) =>{
    return<>
        <div className="w-full h-full">
        <CarousalCard {...props}/>
        </div>
    </>
}


export default Carousal;