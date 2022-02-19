import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronDown } from "react-icons/fa"
import logo from "./LogoMakr-5hzIWn.png"
import { useNavigate } from 'react-router-dom';


import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

import { signOut } from '../../Redux/Auth/Auth.action';


const MobNav = () => {
    return <>
        <div className='md:hidden'>
            <h1>mobile Nav</h1>
        </div>
    </>
}
const LargNav = ({ SignIn, SignUp }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const reduxState = useSelector((global) => global.user.user);

    // console.log({ reduxState });

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const signOutHandler = () => dispatch(signOut());

    return <>
        <div className='hidden md:block'>
            <div className='w-full h-20 flex justify-between items-center '>
                <div className='w-52 h-full '>
                    <img src={logo}
                        alt="logo"
                        className='w-full h-full' />
                </div>
                {
                    reduxState.user ?
                        (
                            <div className='font-bold text-xl flex items-center flex-row gap-3 relative'>
                                <button className='font-bold text-2xl flex gap-1 items-center' onClick={() => navigate('/addcrop')}>AddCrop</button>
                                <button className='font-bold text-2xl flex gap-1 items-center' onClick={() => setIsDropDownOpen((prev) => !prev)} >{reduxState?.user?.fullname}<FaChevronDown /></button>
                                {
                                    isDropDownOpen &&
                                    (
                                        <div className='absolute shadow-lg right-0  top-10 w-32 bg-white z-30 flex flex-col'>
                                            <button className='py-1 px-4 text-xl bottom-2 font-normal border-2 border-gray-200'>Profile</button>
                                            <button onClick={signOutHandler} className='py-1 px-4 text-xl font-normal border-2 border-gray-200'>Sign out</button>
                                        </div>)
                                }
                            </div>
                        )
                        :
                        (
                            <div className='flex gap-4'>
                                <button onClick={SignIn} className='py-1 px-4 text-2xl font-semibold border-2 border-white rounded-full'>Log In</button>
                                <button onClick={SignUp} className='py-1 px-4 text-2xl font-semibold border-2 border-white rounded-full'>Sign Up</button>
                            </div>
                        )
                }
            </div>
        </div>
    </>
}




const Navbar = () => {
    const [openSignin, setOpenSignin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);

    const openSignInmodal = () => setOpenSignin(true);
    const openSignUpmodal = () => setOpenSignup(true);

    return (
        <>
            <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
            <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />
            <nav className="px-20 bg-crop-400 shadow-md">
                <MobNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />
                <LargNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />
            </nav>

        </>
    )
};
export default Navbar;
