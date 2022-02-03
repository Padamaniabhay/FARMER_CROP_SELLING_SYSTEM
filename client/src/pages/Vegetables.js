import React from 'react';


//component
import CropCard from '../Components/CropCard';


const Vegetables = () => {
  return <>
    <div className='w-full flex-col items-center justify-center md:mx-28'>
      <div className='flex flex-wrap w-full h-auto gap-10 py-5 px-5'>
        <CropCard />
        <CropCard />
        <CropCard />
        <CropCard />
      </div>
    </div>
  </>;
};

export default Vegetables;
