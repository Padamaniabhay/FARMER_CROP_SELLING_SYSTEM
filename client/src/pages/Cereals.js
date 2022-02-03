import React from 'react';
import CropCard from '../Components/CropCard';

const Cereals = () => {
  return <>
    <div className='flex flex-wrap w-full h-auto gap-6 justify-around py-5 px-5'>
      <CropCard />
      <CropCard />
      <CropCard />
      <CropCard />
    </div>

  </>;
};

export default Cereals;
