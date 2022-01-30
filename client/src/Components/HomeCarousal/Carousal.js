import React from "react";

const CarousalCard = ({image})=>{
    return <>
        <div className="bg-white shadow rounded-4xl w-full h-96">
            <div className="w-full h-full">
                <img 
                src={image} 
                alt="crop"
                className="w-full h-full rounded-t-md"
                />
            </div>
        </div>
    </>
}


const Carousal = (props) =>{
    return<>
        <CarousalCard {...props}/>
    </>
}


export default Carousal;