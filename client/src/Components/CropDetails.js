import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getSpecificCrop } from '../Redux/Crop/Crop.action';





const CropDetails = () => {

    const [crop, setCrop] = useState();



    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificCrop(id)).then((data) => {
            // console.log({data});
            setCrop((prev) => ({ ...prev,...data.payload.crop}))
        });
    },[])

    return (
        <>
            <div className='w-full h-60 my-20 px-52 container flex flex-row gap-5'>
                <div className='w-52 h-full'>
                    <img
                        src={`http://localhost:4000/public/images/${crop?.image}`}
                        alt={crop?.name}
                        className='w-full h-full'
                    />
                </div>
                <div className='border-r-2 px-5'>
                    <h4 className='w-42 text-gray-400 font-bold text-3xl border-b-2 py-2'>{crop?.name}</h4>
                    <h4 className='w-42 text-gray-400 font-bold text-xl border-b-2 py-2'>Price : {crop?.price}</h4>
                    <h4 className='w-42 text-gray-400 font-normal border-b-2 py-2'>Available Location : {crop?.address}</h4>
                </div>
                <div className='border-2 p-3'>
                    <h4 className='w-42 text-gray-400 font-bold text-xl border-b-2 py-2'>Price : {crop?.price}</h4>
                    <h4 className='w-42 text-gray-400 font-bold text-xl border-b-2 py-2'>Status : in Stock</h4>
                    <div className='flex items-center gap-3'>
                        <h4 className='text-gray-400 font-bold'>quantity</h4>
                        <input type="number" className='w-42 text-gray-400 font-bold border-2 my-2 py-2' />
                    </div>
                    <div className='flex items-center justify-center w-full'>
                        <button className='text-white bg-crop-400 p-2 px-10 hover:border-2 border-crop-400 rounded-md'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CropDetails