import React, { useEffect, useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropup, } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCart } from "../../Redux/Cart/Cart.action";

// components
import FoodItem from "./FoodItem";


// const CartSM = ({ toggle }) => {

//     const reduxState = useSelector((global) => global.cart.cart);
//     const navigate = useNavigate();

//     const continueToCheckout = () => navigate.push("/orders");

//     return (
//         <>
//             <div className=" md:hidden flex items-center justify-between">
//                 <div className="flex flex-col items-start">
//                     <small className="flex items-center gap-1" onClick={toggle}>
//                         {reduxState.length} Item <IoMdArrowDropup />
//                     </small>
//                     <h4>
//                         ₹{reduxState.reduce((acc, curVal) => acc + curVal.totalPrice, 0)}
//                         <sub>(plus tax)</sub>
//                     </h4>
//                 </div>
//                 <button
//                     onClick={continueToCheckout}
//                     className="flex items-center gap-1 bg-crop-400 px-3 py-1 text-white rounded-lg"
//                 >
//                     Continue <IoMdArrowDropright />
//                 </button>
//             </div>
//         </>
//     );
// };

const CartLg = () => {
    const reduxState = useSelector((global) => global.cart.cart);
    console.log({ reduxState });

    return (
        <>
            <div className=" hidden md:flex items-center justify-between container px-20">
                <div className="flex gap-2 text-xl font-bold items-start">
                    <h4>Your Orders ({reduxState.length})</h4>
                </div>
                <div className="flex items-center gap-2">
                    <h4 className="text-xl font-semibold">
                        Subtotal: ₹{parseFloat(reduxState.reduce((acc, curVal) => (acc + (curVal.price * curVal.quantity)), 0)).toFixed(2)}
                    </h4>
                    <Link to={"../../../order"}>
                        <button
                            className="flex items-center text-lg h-10 font-light gap-1 bg-crop-400 px-3 py-1 text-white rounded-lg"
                        >
                            Proceed To CheckOut <IoMdArrowDropright />
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

const CartContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCart());
    }, [])
    const reduxState = useSelector((global) => global.cart.cart);
    return (
        <>

            <div className="h-full bg-white  z-10 p-2 px-3 pt-20">
                <div className="flex items-center justify-between md:px-20">
                    <div className="w-full bg-white">
                        <CartLg />
                    </div>
                </div>
                <hr className="my-2" />

                <div className="flex flex-col gap-2 md:px-20 w-2/3">
                    {reduxState.map((food) => (
                        <FoodItem key={food._id} {...food} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CartContainer;