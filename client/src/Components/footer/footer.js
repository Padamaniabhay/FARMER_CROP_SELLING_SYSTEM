import React from 'react'
import { FaHouseUser, FaEnvelope, FaPhoneSquareAlt, FaMobileAlt, FaFacebookF, FaInstagram, FaLinkedin, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <>
            <footer>
            <div className='py-2 w-full bg-crop-400 flex '>
                    <div className='w-full  text-white px-10 text-xl '>
                        Get connected with us on social networks!
                    </div>
                    <div>
                        <div className='w-full px-8 '>
                            <ul>
                                <li className='py-4 text-white flex'>
                                    <a href='#' className='text-2xl px-3'><FaFacebookF /> </a>
                                    <a href='#' className='text-2xl px-3'><FaInstagram /></a>
                                    <a href='#' className='text-2xl px-3'><FaLinkedin /></a>
                                    <a href='#' className='text-2xl px-3'><FaGoogle /></a>
                                    <a href='#' className='text-2xl px-3'><FaTwitter /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-full px-4 bg-black ' >
                    <div className='row'>
                        <div className='mx-10'>
                            <div className='row flex px-4 py-4 '>
                                <div className='px-4 w-1/4 '>
                                    <h2 className='py-4 text-gray-400 text-xl font-bold '>Crop Sell</h2>
                                    <div className='py-4 text-gray-300'>
                                        The purpose of Cropsell is to provide connections between different roles in the agriculture industry. As the farmers are not getting a fair price for their goods because of contractors. This app removes the requirement of contractors for farmers. Farmers can buy their required needs for farming from Sellers and they can also sell their products to the Consumers
                                    </div>
                                </div>
                                <div className='w-1/4 px-4'>
                                    <h2 className='py-4 text-gray-400 text-xl font-bold'>LINKS</h2>
                                    <ul>
                                        <li className='py-3 text-green-500'>
                                            <Link to='../../../../../../../../'>Home</Link>
                                        </li>
                                        <li className='py-3 text-green-500'>
                                            <Link to='../../../../../../cart'>Cart</Link>
                                        </li>
                                        <li className='py-3 text-green-500'>
                                            <Link to='../../../../../../aboutus'>About us</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='w-1/4 px-4'>
                                    <h2 className='py-4 text-gray-400 text-xl font-bold'>CONTACT</h2>
                                    <div className='py-4 text-gray-300 flex'>
                                        <FaHouseUser className='text-green-600 text-xl mx-2' />Nadiad,Gujarat
                                    </div>

                                    <div className=' text-gray-300 flex'>
                                        <FaEnvelope className='text-green-600 text-xl mx-2' />info@example.com
                                    </div><br />
                                    <div className=' text-gray-300 flex'>
                                        <FaPhoneSquareAlt className='text-green-600 text-xl mx-2' />+91 99099 95099
                                    </div><br />
                                    <div className=' text-gray-300 flex'>
                                        <FaMobileAlt className='text-green-600 text-xl mx-2' /> +91 99009 90099
                                    </div><br />

                                </div>
                                <div className='w-1/4 px-4'>
                                    <h2 className='py-4 text-gray-400 text-xl font-bold'>GET IN TOUCH</h2>

                                    <form className='flex flex-col gap-3'>
                                        <div className='text-gray-400 w-full py-3'>
                                            <label htmlFor='email'>Email address</label>
                                            <input type="email" className='p-1 my-2 rounded-md w-full' id='name' />
                                        </div>
                                        <div className='text-gray-400 w-full'>
                                            <label htmlFor='comment'>Comment</label>
                                            <textarea type='text' className='p-1 my-2 rounded-md w-full' id='comment' />
                                        </div>
                                        <button className='my-2 bg-blue-400 text-white w-1/2 p-2 rounded-md hover:bg-blue-600 transition-colors duration-200'>
                                            SEND MESSAGE
                                        </button>
                                    </form>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>


            </footer>
        </>
    )
}

export default footer