import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { DeleteCart, IncQty, DecQty, } from "../../Redux/Cart/Cart.action"



const FoodItem = (props) => {
    const dispatch = useDispatch();
    const deleteFoodFromCart = () => dispatch(DeleteCart(props._id));

    const increment = () => dispatch(IncQty(props._id));
    const decrement = () => {
        if (props.quantity === 1) return;
        dispatch(DecQty(props._id));
    };


    return (
        <>
            <div className="flex items-center justify-around gap-48">
                <div className="w-20 h-20 flex gap-3 items-center text-xl">
                    <img
                        src={`http://localhost:4000/public/images/${props?.image}`}
                        alt={props?.name}
                        className='w-full h-full'
                    />
                    <h5>{props.name}</h5>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex flex-col items-end">
                        <small>₹{parseInt(props.price) * parseInt(props.quantity)}</small>
                        <div className="px-1 bg-crop-400 text-white rounded flex items-center gap-1">
                            <button
                                onClick={decrement}
                                className="p-1 bg-crop-400 text-white rounded"
                            >
                                -
                            </button>
                            <small>{props.quantity}</small>
                            <button
                                onClick={increment}
                                className="p-1 bg-crop-400 text-white rounded"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <BsTrashFill
                        onClick={deleteFoodFromCart}
                        className="text-crop-400 text-lg items-baseline md:text-xl  "
                    />
                </div>
            </div>
            <hr className="my-1" />
        </>
    );
};

export default FoodItem;