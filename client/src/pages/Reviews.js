import React, { useState, useEffect } from 'react'
import Rating from "react-rating-stars-component"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router'

//components
import AddReviewCard from '../Components/Reviews/AddReviewCard'
import ReviewCard from '../Components/Reviews/ReviewCard'


//redux actions
import { getReviews } from "../Redux/Reviews/Review.action"


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    // const reduxState = useSelector((globalStore) => globalStore.crop.crop)
    const { id } = useParams();

    // console.log({ reviews });

    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(getReviews(id)).then(data => setReviews(data.payload.reviews))
        }
    }, [])


    return (
        <>
            {/* <div className='w-full flex flex-col md:flex-row relative'> */}
            <div className='w-8/12 h-full sticky top-2 bg-white p-3 my-8 rounded-xl shadow-md flex-col gap-3'>
                <AddReviewCard />
            </div>
            <div className='w-8/12 md:w-8/12 flex flex-col gap-3'>
                {
                    reviews.map((review) => <ReviewCard {...review} />)
                }
            </div>
            {/* <aside style={{ height: "fit-content" }} className="hidden md:flex md:items-start md:w-4/12 sticky top-2 bg-white p-3 rounded-xl shadow-md flex-col gap-3">
                    <AddReviewCard />
                </aside> */}
            {/* </div> */}
        </>
    )
}

export default Reviews
