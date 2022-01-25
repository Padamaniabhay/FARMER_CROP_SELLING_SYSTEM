import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { FcGoogle } from "react-icons/fc"
export default function SignUp({ isOpen, setIsOpen }) {


    function closeModal() {
        setIsOpen(false);
    }


    const googleSignIn = ()=>(window.location.href="http://localhost:4000/auth/google");


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
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                </Dialog.Title>
                                <div className="mt-2 flex flex-col gap-3 w-full">
                                    <button onClick={googleSignIn} className='flex justify-center py-2 items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100 rounded-lg'>Sign Up With Google <FcGoogle /></button>
                                    <form className='flex flex-col gap-3'>
                                        <div className='w-full flex flex-col gap-2'>
                                            <label htmlFor='fullname' >FullName</label>
                                            <input type="text"  id='fullname' placeholder='John Doe' className='w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-zomato-400' />
                                        </div>
                                        <div className='w-full flex flex-col gap-2'>
                                            <label htmlFor='email' >Email</label>
                                            <input type="email"  id='email' placeholder='email@email.com' className='w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-zomato-400' />
                                        </div>
                                        <div className=''>
                                            <label htmlFor='password' >Password</label>
                                            <input type="password"  id='password' placeholder='*********' className='w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-zomato-400' />
                                        </div>
                                        <div  className='w-full text-center bg-crop-400 text-white py-2 rounded-lg'>
                                            Sign Up
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
