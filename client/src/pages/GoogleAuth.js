import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

//redux action
import { googleAuth } from '../Redux/Auth/Auth.action'

const GoogleAuth = () => {

    const { token } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        token && dispatch(googleAuth(token)).then(() => window.location.href = "http://localhost:3000/")
    }, [token])

    return (
        <>        </>
    )
}

export default GoogleAuth
