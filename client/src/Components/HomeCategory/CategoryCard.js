import React from 'react';
import { Link } from 'react-router-dom';


const CategoryCard = (props) => {
    return <>
        <Link to={`/${props.Id}`} className=" p-2 w-full">
            <div className='w-72 h-72 my-12'>
                <div className='w-72 h-72 overflow-hidden absolute'>
                    <img src={props.image} alt="image" className='w-full h-full object-cover opacity-90 rounded-lg transform transition duration-4000 hover:scale-150' />
                </div>
                <div className='w-full h-full pt-28 '>
                    <div className=' relative z-10 text-4xl  w-full h-20 flex flex-col items-center bg-gray-400 bg-opacity-50'>
                        <h4 className='text-zinc-600'>{props.title}</h4>
                        <div className='z-10 text-sm italic font-normal text-gray-700 overflow-x-auto'>
                            {props.summary}
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </>
};

        export default CategoryCard;
