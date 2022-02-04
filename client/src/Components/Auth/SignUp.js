import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { FcGoogle } from "react-icons/fc"
import { useDispatch } from 'react-redux';

import { signUp } from '../../Redux/Auth/Auth.action';


export default function SignUp({ isOpen, setIsOpen }) {

    const [userData, setUserData] = useState({
        email: "",
        phoneNumber: [],
        password: "",
        fullname: "",
        city: "",
        state: "",
        pincode: ""
    })

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const submit = () => {
        closeModal();
        setUserData({
            email: "",
            phoneNumber: [],
            password: "",
            fullname: "",
            city: "",
            state: "",
            dist: ""
        });
        return (dispatch(signUp(userData)));
        
    }

    const googleSignIn = () => (window.location.href = "http://localhost:4000/auth/google");


    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className=" inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                </Dialog.Title>
                                <div className="mt-2 flex flex-col gap-3 w-full">
                                    <div className='mx-40'>
                                        <button onClick={googleSignIn} className='flex justify-center py-2  items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100 rounded-lg'>Sign Up With Google <FcGoogle /></button>
                                    </div>
                                    <form className='flex flex-col gap-3'>
                                        <div className='w-full flex flex-col gap-2'>
                                            <label htmlFor='fullname' >FullName</label>
                                            <input type="text" onChange={handleChange} value={userData.fullname} id='fullname' placeholder='John Doe' className='w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-crop-400' />
                                        </div>
                                        <div className='flex flex-row gap-3 items-center'>
                                            <div className='w-full flex flex-row gap-2 items-center'>
                                                <label htmlFor='email' >Email</label>
                                                <input type="email" onChange={handleChange} value={userData.email} id='email' placeholder='email@email.com' className='w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-crop-400' />
                                            </div>
                                            <div className='w-full flex flex-row gap-2 items-center'>
                                                <label htmlFor='PhoneNumber' >PhoneNumber</label>
                                                <input type="text" onChange={handleChange} value={userData.phoneNumber} id='phoneNumber' placeholder='123456789' className='w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-crop-400' />
                                            </div>
                                        </div>
                                        <div className='flex flex-row gap-3 items-center py-2'>
                                            <div className='w-full flex flex-row gap-2 items-center'>
                                                <label htmlFor='password' >Password</label>
                                                <input type="password" onChange={handleChange} value={userData.password} id='password' placeholder='*********' className='w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-crop-400' />
                                            </div>

                                        </div>
                                        <div className='w-full flex flex-col gap-2'>
                                            <label htmlFor='Address' >Address</label>
                                            <textarea rows={3} id='address' placeholder='house No....' className='w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-crop-400' />
                                        </div>
                                        <div className='flex flex-row gap-3 items-center py-2'>
                                            <div className='w-full flex flex-row gap-2 items-center'>
                                                <label htmlFor='city' >city</label>
                                                <input type="text" onChange={handleChange} value={userData.city} id='city' placeholder="city" className='w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-crop-400' />
                                            </div>
                                            <div className='w-full flex flex-row gap-2 items-center'>
                                                <label htmlFor='state' >state</label>
                                                <input type="text" onChange={handleChange} value={userData.state} id='state' placeholder="state" className='w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-crop-400' />
                                            </div>
                                            <div className='w-full flex flex-row gap-2 items-center'>
                                                <label htmlFor='pincode' >pincode</label>
                                                <input type="text" onChange={handleChange} value={userData.pincode} id='pincode' placeholder="pincode" className='w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-crop-400' />
                                            </div>
                                        </div>
                                        <div
                                            onClick={submit}
                                            className="w-full  text-center bg-crop-400 text-white py-2 rounded-lg">
                                            Sign up
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
