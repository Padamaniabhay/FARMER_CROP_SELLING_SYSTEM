import React, { useState, useEffect } from 'react'
import { TiStar } from 'react-icons/ti'
import { useDispatch } from "react-redux"
import dayjs from "dayjs"
import { getUser } from '../../Redux/User/User.action'

const ReviewCard = (props) => {
    const [user, setUser] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(props.user)).then(data =>
            setUser(data.payload.user?.fullname)
            // console.log({data})
        )
    }, [])
    // console.log({props});

    return (
        <>
            <div className=' my-3 flex flex-col gap-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-8 rounded-full'>
                            <img src='https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A'
                                alt="avatar"
                                className='w-full h-full rounded-full object-cover'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-lg font-semibold'>{user}</h3>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-3'>
                        <span className='text-white text-xs bg-crop-700 px-2 py-1 rounded-lg flex items-center gap-1'>{props?.rating} <TiStar /></span>
                        <small className='text-gray-500'>
                            {
                                dayjs(props.createdAt).format("DD MMM YYYY")
                            }
                        </small>
                    </div>
                    <div className='w-full'>
                        {/* <p>{props.subject}</p> */}
                        <p className='w-full text-gray-600 font-light text-base'>
                            {props.reviewText}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewCard
