import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

//components
import CropCard from '../Components/CropCard';

//redux
import { GetCrop } from '../Redux/Crop/Crop.action';



const Fruit = () => {
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(GetCrop());
  }, [])

  
  const reduxState = useSelector((global) => global.crop.crop);
  console.log({reduxState});
  
  const [cropList, setCropList] = useState([]);
  useEffect(() => {
    reduxState && setCropList(reduxState.Crop);
  }, [reduxState])

console.log({cropList});

  return <>
    <div className='flex flex-wrap w-full h-auto gap-6 py-5 px-5'>
      {
        cropList.map((crop) => (
          <CropCard {...crop} key={crop._id} />
        ))
      }
    </div>
  </>;
};

export default Fruit;
