import React, { useState } from 'react';
import logo from "./logo.jpeg"

import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

const MobNav = () => {
    return <>
        <div className='md:hidden'>
            <h1>mobile Nav</h1>
        </div>
    </>
}
const LargNav = ({ SignIn, SignUp }) => {
    return <>
        <div className='hidden md:block'>
            <div className='w-full h-20 flex justify-between items-center'>
                <div className='w-52 h-full'>
                    <img src={logo}
                        alt="logo"
                        className='w-full h-full' />
                </div>
                <div className='flex gap-4'>
                    <button onClick={SignIn} className='py-1 px-4 text-2xl font-semibold border-2 border-white rounded-full'>Log In</button>
                    <button onClick={SignUp} className='py-1 px-4 text-2xl font-semibold border-2 border-white rounded-full'>Sign Up</button>
                </div>
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
