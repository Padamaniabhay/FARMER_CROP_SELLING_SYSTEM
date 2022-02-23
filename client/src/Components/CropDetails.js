import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getSpecificCrop } from '../Redux/Crop/Crop.action';
import { IncQty, DecQty, getCart, addCart } from '../Redux/Cart/Cart.action';





const CropDetails = () => {

    const [crop, setCrop] = useState();
    const [cart, setCart] = useState();



    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificCrop(id)).then((data) => {
            console.log({data});
            setCrop((prev) => ({ ...prev, ...data.payload.crop }))
            setCart((prev) => ({ ...prev, ...data.payload.crop,quantity:1 }))
        });
    }, [])

    

    // useEffect(() => {
    //     dispatch(getCart(id)).then((data) => {
    //         // console.log({ data });
    //         // setCart((prev) => ({ ...prev, ...data.payload }))
    //     });
    // }, [cart])

    const addcart = () => {   
        dispatch(addCart({ cart }));
    }

    const increment = () => {
        setCart((prev)=>({...prev,quantity:prev.quantity+1}))
        dispatch(IncQty(id))}
    const decrement = () => {
        if (cart?.quantity === 1) return;
        setCart((prev)=>({...prev,quantity:prev.quantity-1}))
        dispatch(DecQty(id));
    };

    // console.log({ cart });


    return (
        <>
            <div className='w-full h-60 my-20 px-52 container flex flex-row gap-5'>
                <div className='w-52 h-full'>
                    <img
                        src={`http://localhost:4000/public/images/${crop?.image}`}
                        alt={crop?.name}
                        className='w-full h-full border-2 border-gray-400 rounded-lg'
                    />
                </div>
                <div className='border-r-2 px-5'>
                    <h4 className='w-42 text-gray-500 font-bold text-3xl border-b-2 py-2'>{crop?.name}</h4>
                    <h4 className='w-42 text-gray-400 font-bold text-xl border-b-2 py-2'>Price : {crop?.price}</h4>
                    <h4 className='w-42 text-gray-400 font-normal border-b-2 py-2'>Available Location : {crop?.address}</h4>
                </div>
                <div className='border-2 rounded-md p-3 flex flex-col gap-2'>
                    <h4 className='w-42 text-gray-400 font-bold text-xl border-b-2 py-2'>Price : ₹{cart ? parseInt(cart?.price) * parseInt(cart?.quantity) : crop?.price}</h4>
                    <h4 className='w-42 text-gray-400 font-bold text-xl border-b-2 py-2'>Status : in Stock</h4>
                    <div className='flex items-center gap-3'>
                        <h4 className='text-gray-400 font-bold'>quantity</h4>
                        <div className='w-full my-1 flex flex-row bg-crop-400 rounded-md text-white items-center justify-between gap-1'>
                            <button className='h-full w-full bg-crop-400 text-white font-bold text-xl rounded-md '
                                onClick={decrement}>
                                -
                            </button>
                            {cart?.quantity}
                            <button className='h-full w-full bg-crop-400 text-white font-bold text-xl rounded-md '
                                onClick={increment}>
                                +
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-full'>
                        <button className='text-white bg-crop-400 p-2 px-10 rounded-md'
                            onClick={addcart}
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CropDetails