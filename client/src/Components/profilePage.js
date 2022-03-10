import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { GetUserCrop } from '../Redux/Crop/Crop.action';
import { getOrders } from '../Redux/Order/Order.action';



const ProfilePage = () => {

    const dispatch = useDispatch();

    const reduxState = useSelector((global) => global);

    // console.log({ reduxState });

    useEffect(() => {
        reduxState.user.user.user && dispatch(getOrders(reduxState.user.user.user._id));
        reduxState.user.user.user && dispatch(GetUserCrop(reduxState.user.user.user._id));

    }, [reduxState.user.user.user])

    console.log({ reduxState });

    return (

        <>
            <div className='w-full h-full container py-5'>
                <div className='w-full flex flex-row gap-6'>
                    <div className='w-1/3'>
                        <div className=''>
                            <div className='row '>
                                <div className='columns-md-4'>
                                    <h1 className='font-serif text-4xl font-bold text-gray-500'>User profile</h1><br />

                                </div>
                                <div className='w-full my-4 flex flex-col '>
                                    <label htmlFor='name' >Name </label>
                                    <input type="text" className='border-2 p-1' id='name' />
                                </div>
                                <div className='my-4 flex flex-col w-full'>
                                    <label htmlFor='email' >Email Address </label>
                                    <input type="email" className='border-2 p-1' id='email' />
                                </div>
                                <div className='my-4 flex flex-col w-full'>
                                    <label htmlFor='Password' >Password</label>
                                    <input type="Password" className='border-2 p-1' id='Password' />
                                </div>
                                <div className='my-4 flex flex-col w-full'>
                                    <label htmlFor='confirm passoword' >Confirm Password</label>
                                    <input type="password" className='border-2 p-1' id='confirm password' />
                                </div>
                                <button className='my-4 bg-blue-500 px-2 py-1 text-white p-2 hover:bg-blue-900 transition-colors duration-200 rounded-md'>
                                    Update
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className='w-3/4 '>
                        <div className='border-gray-900'>
                            <div className='font-sans text-4xl font-bold text-gray-500'>
                                My Orders
                            </div>

                            <table className='w-full my-6 table-auto text-left'>
                                <thead>
                                    <tr className='px-1'>
                                        <th>ID</th>
                                        <th>TOTAL</th>
                                        <th> PAID</th>
                                        <th>DELIVER</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reduxState?.Order?.order?.orders[0]?.orderDetails?.map((order, index) => (
                                            index & 1 ?
                                                <tr>
                                                    <td className='p-2'>{order._id}</td>
                                                    <td>{order.paymentDetails.itemTotal}</td>
                                                    <td>YES</td>
                                                    <td>YES</td>
                                                </tr>
                                                :
                                                <tr className='bg-slate-300 '>
                                                    <td className='p-2'>{order._id}</td>
                                                    <td>{order.paymentDetails.itemTotal}</td>
                                                    <td>YES</td>
                                                    <td>YES</td>
                                                </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className='my-10  border-gray-900'>
                            <div className='font-sans text-4xl font-bold text-gray-500'>
                                My Products
                            </div>

                            <table className='w-full my-6 text-left'>
                                <thead>
                                    <tr>
                                        <th>NAME</th>
                                        <th>PRODUCT ID</th>
                                        <th>ADDRESS</th>
                                        <th>Quntity(.kg)</th>
                                        <th>REVIEWED</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        reduxState?.crop?.crop?.orders?.map((crop, index) => (
                                            index & 1 ?
                                                <tr>
                                                    <td className='p-2'>{crop.name}</td>
                                                    <td>{crop._id}</td>
                                                    <td>{crop.address}</td>
                                                    <td>{crop.quantity}</td>
                                                    <td>good </td>
                                                </tr>
                                                :
                                                <tr className='bg-slate-300'>
                                                    <td className='p-2'>{crop.name}</td>
                                                    <td>{crop._id}</td>
                                                    <td>{crop.address}</td>
                                                    <td>{crop.quantity}</td>
                                                    <td>good </td>
                                                </tr>
                                        ))
                                    }
                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>

            </div>




        </>
    )
}

export default ProfilePage