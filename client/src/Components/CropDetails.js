import React from 'react'

const CropDetails = () => {
    return (
        <>
            <div className='w-full h-60 my-20 px-52 container flex flex-row gap-5'>
                <div className='w-52 h-full'>
                    <img
                        src="https://agroicapp.herokuapp.com/images/consumer/chana_dhal.jpg"
                        alt="crop"
                        className='w-full h-full'
                    />
                </div>
                <div className='border-r-2 px-5'>
                    <h4 className='w-42 text-gray-400 font-bold text-3xl border-b-2 py-2'>Sharp Chana Dal</h4>
                    <h4 className='w-42 text-gray-400 font-bold text-xl border-b-2 py-2'>Price : 300</h4>
                    <h4 className='w-42 text-gray-400 font-normal border-b-2 py-2'>Available Location : Rajkot</h4>
                </div>
                <div className='border-2 p-3'>
                    <h4 className='w-42 text-gray-400 font-bold text-xl border-b-2 py-2'>Price : 300</h4>
                    <h4 className='w-42 text-gray-400 font-bold text-xl border-b-2 py-2'>Status : in Stock</h4>
                    <div className='flex items-center gap-3'>
                        <h4 className='text-gray-400 font-bold'>quantity</h4>
                        <input type="number" className='w-42 text-gray-400 font-bold border-2 my-2 py-2' />
                    </div>
                    <div className='flex items-center justify-center w-full'>
                        <button className='text-white bg-crop-400 p-2 px-10 hover:border-2 border-crop-400 rounded-md'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CropDetails