import React from 'react';
import {AiFillStar} from "react-icons/ai"

const CropCard = () => {
    return <>
        <div className='flex flex-col flex-wrap w-1/4 h-96 border-2 rounded-2xl hover:shadow-xl py-2 px-4 transitions duration-700 ease-in-out'>
            <div className='w-full h-60'>
                <img
                    src='https://agroicapp.herokuapp.com/images/consumer/chana_dhal.jpg'
                    alt='image'
                    className='w-full h-full'
                />
                <div>
                    <div className='flex flex-row justify-between'>
                        <h4 className='font-bold text-xl'>Sharp Chana Dal</h4>
                        <div className='flex gap-1 items-center bg-green-600 text-white rounded-lg px-2 py-1'>4.5 <AiFillStar/></div>
                    </div>
                </div>
                <div className='text-lg font-semibold'>Price: RS.70</div>
                <div className='text-lg font-normal'>Product Size: 1KG</div>
                <div className='text-lg flex items-center gap-1'>Location:<div className='font-semibold'>Rajkot</div></div>
            </div>
        </div>
    </>;
};

export default CropCard;
