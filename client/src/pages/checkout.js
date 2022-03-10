import React,{useEffect} from "react";
import { BsShieldLockFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import logo from "./../Components/Navbar/LogoMakr-5hzIWn.png"
// import Razorpay from "razorpay"

// components
import FoodItem from "../Components/Cart/FoodItem";

// reduxa action
import { createOrder, orderPlaced } from "../Redux/Order/Order.action";
import { DeleteAllCart, getCart } from "../Redux/Cart/Cart.action";


const Checkout = () => {
    const reduxStateCart = useSelector((global) => global.cart.cart);
    const reduxStateUser = useSelector((global) => global.user.user.user);

    // console.log({ reduxStateUser:reduxStateUser });

    useEffect(() => {
        dispatch(getCart());
    }, [])



    const dispatch = useDispatch();

    const payNow = () => {

        // const order = dispatch(
        //     createOrder(parseFloat(reduxStateCart.reduce((acc, curVal) => acc + (curVal.price * curVal.quantity), 0)))
        // )

        let options = {
            key: "rzp_test_dYHM93DJi3BJte",
            amount:
                parseInt(reduxStateCart.reduce((acc, curVal) => acc + (curVal.price * curVal.quantity), 0) *
                    100),
            currency: "INR",
            name: "ONLINE FARMER CROP SELLING SYSTEM",
            description: "CROP Payment",
            image:
                logo,

            handler: () => {
                dispatch(
                    createOrder(parseFloat(reduxStateCart.reduce((acc, curVal) => acc + (curVal.price * curVal.quantity), 0)))
                )
                dispatch(orderPlaced(reduxStateCart, reduxStateUser._id));
                dispatch(DeleteAllCart());
                alert("Payment Done");
            },
            prefill: {
                name: reduxStateUser.fullname,
                email: reduxStateUser.email,
            },
            theme: { color: "#008F11" },
        };

        let razorPay = new window.Razorpay(options);
        razorPay.open();
        // createOrder(reduxStateCart.reduce((acc, curVal) => acc + (curVal.price * curVal.quantity), 0))
    };

    // console.log({reduxStateUser});

    return (
        <div className="my-3 pt-14 flex flex-col h-full gap-3 items-center">
            <h1 className="text-xl h-full text-center md:text-2xl font-bold">Checkout</h1>
            <div className="w-full md:w-3/5 h-full rounded-lg  py-3 shadow-lg bg-white flex flex-col items-center">
                <h3 className="text-lg font-semibold">Summary</h3>
                <div className="flex w-full  flex-col gap-2 items-center">
                    <h5 className="text-base tracking-wider">ORDER FROM</h5>
                    {
                        <h4 className="text-xl font-bold">{reduxStateUser?.fullname}</h4>
                    }
                    <div className="my-4 h-full px-4 flex flex-col gap-2 w-full md:w-3/5 ">
                        {reduxStateCart && reduxStateCart.map((food) => (
                            <FoodItem key={food._id} {...food} />
                        ))}
                    </div>
                </div>
                <button
                    onClick={payNow}
                    className="flex items-center gap-2 justify-center my-4 md:my-8 w-full md:w-4/5 px-0 h-14 text-white font-medium text-lg bg-crop-400 rounded-lg"
                >
                    Pay Securely <BsShieldLockFill />
                </button>
            </div>
        </div>
    );
};

export default Checkout;