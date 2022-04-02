import React, { useState } from 'react'

//components
import ReviewModel from './ReviewModel'

const AddReviewCard = () => {
    const [isOpen, setIsOpen] = useState(false);


    const openModel = () => {
        if(!localStorage.cropUser) {
            return alert("please sign in to post a review")
        }
        setIsOpen(true);
    }
    return (
        <>
            <ReviewModel isOpen={isOpen} setIsOpen={setIsOpen} />
            <button onClick={openModel} className='text-crop-400'>Write a review</button>
        </>
    )
}

export default AddReviewCard
