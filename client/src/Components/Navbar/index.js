// import React, { useState } from 'react';
// import logo from "./logo.jpeg"
// import { useDispatch,useSelector } from 'react-redux';

// import SignIn from '../Auth/SignIn';
// import SignUp from '../Auth/SignUp';

// //redux
// import { signOut } from '../../Redux/Auth/Auth.action';

// const MobNav = () => {
//     return <>
//         <div className='md:hidden'>
//             <h1>mobile Nav</h1>
//         </div>
//     </>
// }
// const LargNav = ({ SignIn, SignUp }) => {

//     const reduxState = useSelector(global => console.log({global}));

//     const [isDropDownOpen, setIsDropDownOpen] = useState(false)


//     const dispatch = useDispatch();

//     const signOutHandler = () => dispatch(signOut());

//     return <>
//         <div className='hidden md:block'>
//             <div className='w-full h-20 flex justify-between items-center'>
//                 <div className='w-52 h-full'>
//                     <img src={logo}
//                         alt="logo"
//                         className='w-full h-full' />
//                 </div>
//                 {
//                     reduxState?.user?.fullname ?
//                         <>
//                             <div className="w-20 relative">
//                                 <div onClick={() => setIsDropDownOpen((prev) => !prev)} className="border p-2 border-gray-300 text-zomato-400 w-full h-20 rounded-full"><div>{(reduxState?.user?.email)}</div>
//                                 </div>
//                                 <div className="relative">
//                                 </div>
//                                 {
//                                     isDropDownOpen &&
//                                     <div className="absolute shadow-lg  py-3 -right-4 w-full bg-white z-10 flex flex-col gap-2">
//                                         <button onClick={signOutHandler} >Sign out</button>
//                                     </div>
//                                 }
//                             </div>
//                         </>
//                         :
//                         <>
//                             <div className='flex gap-4'>
//                                 <button onClick={SignIn} className='py-1 px-4 text-2xl font-semibold border-2 border-white rounded-full'>Log In</button>
//                                 <button onClick={SignUp} className='py-1 px-4 text-2xl font-semibold border-2 border-white rounded-full'>Sign Up</button>
//                             </div>
//                         </>
//                 }
//             </div>
//         </div>
//     </>
// }




// const Navbar = () => {
//     const [openSignin, setOpenSignin] = useState(false);
//     const [openSignup, setOpenSignup] = useState(false);

//     const openSignInmodal = () => setOpenSignin(true);
//     const openSignUpmodal = () => setOpenSignup(true);

//     return (
//         <>
//             <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
//             <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />
//             <nav className="px-20 bg-crop-400 shadow-md">
//                 <MobNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />
//                 <LargNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />
//             </nav>

//         </>
//     )
// };
// export default Navbar;



import React, { useState } from 'react';
import logo from "./LogoMakr-5hzIWn.png"

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
                <MobNav SignIn={openSignInmodal} SignUp={openSignUpmodal}/>
                <LargNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />
            </nav>

        </>
    )
};
export default Navbar;
