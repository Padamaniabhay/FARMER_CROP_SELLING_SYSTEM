import React from 'react';


//component
import CropCard from '../Components/CropCard';


const Vegetables = () => {
  return <>
    <div className='flex flex-wrap w-full h-auto gap-6 py-5 px-5'>
      <CropCard />
      <CropCard />
      <CropCard />
      <CropCard />
    </div>

  </>;
};

export default Vegetables;
