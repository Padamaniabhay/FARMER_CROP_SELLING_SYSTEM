import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getSpecificCrop } from '../Redux/Crop/Crop.action';
import { IncQty, DecQty, addCart } from '../Redux/Cart/Cart.action';
import RelatedItems from './RelatedItems';




const CropDetails = () => {

    const [crop, setCrop] = useState({ isAddedToCart: false });
    const [cart, setCart] = useState();

    // console.log(useParams());

    const { id, category } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificCrop(id)).then((data) => {
            setCrop((prev) => ({ ...prev, ...data.payload.crop,isAddedToCart:false }))
            setCart((prev) => ({ ...prev, ...data.payload.crop, quantity: 1 }))
        });
    }, [id])



    // useEffect(() => {
    //     dispatch(getCart(id)).then((data) => {
    //         // console.log({ data });
    //         // setCart((prev) => ({ ...prev, ...data.payload }))
    //     });
    // }, [cart])

    const addcart = () => {
        dispatch(addCart({ ...cart }));
        setCrop((prev) => ({ ...prev, isAddedToCart: true }));
    }

    const increment = () => {
        setCart((prev) => ({ ...prev, quantity: prev.quantity + 1 }))
        dispatch(IncQty(id))
    }
    const decrement = () => {
        if (cart?.quantity === 1) return;
        setCart((prev) => ({ ...prev, quantity: prev.quantity - 1 }))
        dispatch(DecQty(id));
    };

    // console.log({ cart });


    return (
        <>
            <div className='w-full h-full container'>
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
                    <div className='border-2 rounded-md p-2 flex flex-col gap-2 '>
                        <h4 className='w-42 text-gray-400 font-bold text-xl border-b-2 py-2'>Price : ₹{cart ? parseFloat(parseFloat(cart?.price) * parseInt(cart?.quantity)).toFixed(2) : crop?.price}</h4>
                        <h4 className='w-42 text-gray-400 font-bold text-xl border-b-2 py-2'>Status : in Stock</h4>
                        <div className='flex items-center gap-3'>
                            <h4 className='text-gray-400 font-bold'>quantity</h4>
                            <div className='w-full my-1 flex flex-row bg-crop-400 rounded-md text-white items-center justify-between gap-1'>
                                <button className='h-full w-full bg-crop-400 text-white font-bold text-xl rounded-md '
                                    onClick={decrement}
                                    disabled={crop.isAddedToCart}
                                >
                                    -
                                </button>
                                {cart?.quantity}
                                <button className='h-full w-full bg-crop-400 text-white font-bold text-xl rounded-md '
                                    onClick={increment}
                                    disabled={crop.isAddedToCart}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-full'>
                            <button className='text-white bg-crop-400 p-2 px-10 rounded-md'
                                onClick={addcart}
                                disabled={crop.isAddedToCart}
                            >
                                {crop?.isAddedToCart ? (
                                    "Added"
                                ) : (
                                    <>
                                        Add To Cart
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                 <div className='text-2xl font-bold'>Related Items</div>
                <div className='w-full h-full'>
                    <RelatedItems Category={category} />
                </div>
            </div>
        </>
    )
}

export default CropDetails