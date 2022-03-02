import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { CgSearch } from "react-icons/cg"

//components
import CropCard from '../Components/CropCard';

//redux
import { GetCrop, GetCropBySearch } from '../Redux/Crop/Crop.action';



const Vegetables = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(GetCrop("vegetable"));
  }, [])


  const reduxState = useSelector((global) => global.crop.crop);

  const [cropList, setCropList] = useState([]);
  // const [searchCrop, setSearchCrop] = useState();

  useEffect(() => {
    setCropList(reduxState?.Crop);
  }, [reduxState])


  // useEffect(() => {
  //   dispatch(GetCropBySearch(searchCrop))
  // }, [searchCrop])


  return <>
    <div className='flex flex-wrap w-full h-auto gap-6 py-5 px-5'>
      <div className='w-full h-10 flex flex-row items-center gap-1 border-2 rounded-md border-crop-400 '>
        <CgSearch className='w-6 h-full text-gray-800' />
        <input type="text" placeholder='Search here ...'
          className='text-xl px-3 py-2 w-full h-full outline-none'
          onChange={(e) => { e.target.value !== "" ? dispatch(GetCropBySearch(e.target.value,"vegetable")) : dispatch(GetCrop("vegetable")) }} />
      </div>
      <div className='flex flex-wrap w-full h-auto gap-6 py-5 px-5'>
        {
          cropList && cropList.map((crop) => (
            <CropCard {...crop} Category="vegetable" key={crop._id} />
          ))
        }
      </div>
    </div>
  </>;
};

export default Vegetables;
