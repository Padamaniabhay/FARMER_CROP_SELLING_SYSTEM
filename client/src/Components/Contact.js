import React from 'react'

const Contact = () => {

    const submitForm = () => {

    };
    return (
        <>

            {/** contact us form */}
            <div className='h-full flex justify-center flex-col'>
                <div className='w-2/3 m-auto p-8 shadow-lg'>
                    <h1 className='text-4xl font-bold flex items-center'>
                        <span>
                            Contact Us
                        </span>
                    </h1>
                    <form className='flex flex-col' onSubmit={submitForm}>
                        <div className='my-2 flex flex-col'>
                            <label htmlFor='name' >Name </label>
                            <input type="text" className='border-2 p-2' id='name' />
                        </div>
                        <div className='my-2 flex flex-col'>
                            <label htmlFor='email' >Email</label>
                            <input type="email" className='border-2 p-2' id='name' />
                        </div>
                        <div className='my-2 flex flex-col'>
                            <label htmlFor='Message' >Message</label>
                            <textarea id='message' className='border-2 p-2' />
                        </div>
                        <button className='my-2 bg-blue-500 text-white w-full p-2 hover:bg-blue-900 transition-colors duration-200'>
                            Submit
                        </button>

                    </form>

                </div>

            </div>

            <div className='contact_info p-10'>
                <div className='container'>
                    <div className='row' >
                        <div className='columns-lg offset-lg-10 flex justify-between outline-gray-900'>
                            {/* phone umber */}
                            <div className='contact_info_item d-flex Justify-start  align-items-center'>
                                <img src='https://img.icons8.com/office/24/000000/iphone.png' alt='phone' />
                                <div className='contact_info_content'>
                                    <div className='contact_info_title'>
                                        phone
                                    </div>
                                    <div className='contact_info_text'>
                                        +919996444386
                                    </div>
                                </div>
                            </div>
                            {/* email umber */}
                            <div className='contact_info_item d-flex Justify-content-start  align-items-center'>
                                <img src='https://img.icons8.com/office/24/000000/iphone.png' alt='phone' />
                                <div className='contact_info_content'>
                                    <div className='contact_info_title'>
                                        Email
                                    </div>
                                    <div className='contact_info_text'>
                                        cropsell@gmail.com
                                    </div>
                                </div>


                            </div>
                            {/* addess umber */}
                            <div className='contact_info_item d-flex Justify-content-start  align-items-center'>
                                <img src='https://img.icons8.com/office/24/000000/iphone.png' alt='phone' />
                                <div className='contact_info_content'>
                                    <div className='contact_info_title'>
                                        Adress
                                    </div>
                                    <div className='contact_info_text'>
                                        Nadiad,Gujarat
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact