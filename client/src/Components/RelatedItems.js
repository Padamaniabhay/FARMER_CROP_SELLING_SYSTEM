import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

//components
import CropCard from '../Components/CropCard';

//redux
import { GetCrop } from '../Redux/Crop/Crop.action';


const RelatedItems = (props) => {
    const { id } = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetCrop(props.Category));
    }, [props])


    const reduxState = useSelector((global) => global.crop.crop);

    const [cropList, setCropList] = useState([]);
    // const [searchCrop, setSearchCrop] = useState();

    useEffect(() => {
        setCropList(reduxState?.Crop);
    }, [reduxState])


    // useEffect(() => {
    //   dispatch(GetCropBySearch(searchCrop))
    // }, [searchCrop])

    return (
        <>
            {/* <div className='flex flex-wrap w-full h-auto gap-6 py-5 px-5'> */}
            <div className='flex flex-wrap w-full h-auto gap-6 py-5 px-5'>
                {
                    cropList && cropList.map((crop) => (
                        crop._id === id ? <></> :
                            <CropCard {...crop} Category={props.Category} key={crop._id} />
                    ))
                }
            </div>
            {/* </div> */}
        </>
    )
}

export default RelatedItems