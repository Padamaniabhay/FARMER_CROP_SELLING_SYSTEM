import React from 'react'

const profilePage = () => {
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
                                <button className='my-4 bg-blue-500 px-2 py-1 text-white p-2 hover:bg-blue-900 transition-colors duration-200'>
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
                                    <tr>
                                        <th>ID</th>
                                        <th>DATE</th>
                                        <th>TOTAL</th>
                                        <th> PAID</th>
                                        <th>DELIVER</th>
                                        <th> MORE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='bg-slate-300'>
                                        <td>1002121313132</td>
                                        <td>2022-02-19</td>
                                        <td>9200</td>
                                        <td>x</td>
                                        <td>x</td>
                                        <td><button type='submit' className='bg-blue-500 px-2 py-1 text-white p-1 hover:bg-blue-900 transition-colors duration-200'>Details</button></td>
                                    </tr>
                                    <tr>
                                        <td>1002121313132</td>
                                        <td>2022-02-19</td>
                                        <td>9200</td>
                                        <td>x</td>
                                        <td>x</td>
                                        <td><button type='submit' className='bg-blue-500 px-2 py-1 text-white p-1 hover:bg-blue-900 transition-colors duration-200'>Details</button></td>
                                    </tr>
                                    <tr className='bg-slate-300'>
                                        <td>1002121313132</td>
                                        <td>2022-02-19</td>
                                        <td>9200</td>
                                        <td>x</td>
                                        <td>x</td>
                                        <td><button type='submit' className='bg-blue-500 px-2 py-1 text-white p-1 hover:bg-blue-900 transition-colors duration-200'>Details</button></td>
                                    </tr>
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
                                        <th>EDIT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='bg-slate-300'>
                                        <td>APPLE</td>
                                        <td>A-101</td>
                                        <td>surat</td>
                                        <td>1000</td>
                                        <td>good </td>
                                        <td><button type='submit' class="bg-blue-500 px-2 py-1 text-white p-1 hover:bg-blue-900 transition-colors duration-200">
                                            Edit</button></td>
                                    </tr>
                                    <tr className=''>
                                        <td>APPLE</td>
                                        <td>A-101</td>
                                        <td>surat</td>
                                        <td>1000</td>
                                        <td>good </td>
                                        <td><button type='submit' class="bg-blue-500 px-2 py-1 text-white p-1 hover:bg-blue-900 transition-colors duration-200">
                                            Edit</button></td>
                                    </tr>
                                    <tr className='bg-slate-300'>
                                        <td>APPLE</td>
                                        <td>A-101</td>
                                        <td>surat</td>
                                        <td>1000</td>
                                        <td>good </td>
                                        <td><button type='submit' class="bg-blue-500 px-2 py-1 px-2 py-1 text-white p-1 hover:bg-blue-900 transition-colors duration-200">
                                            Edit</button></td>
                                    </tr>

                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>

            </div>




        </>
    )
}

export default profilePage