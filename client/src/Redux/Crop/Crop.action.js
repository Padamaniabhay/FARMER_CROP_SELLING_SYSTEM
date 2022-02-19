import axios from "axios"

//redux types
import { ADD_CROP, GET_CROP } from "./Crop.type";


//redux action
import { getMySelf } from "../User/User.action";


export const Addcrop = (data) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST",
            url: `http://localhost:4000/crop/addcrop`,
            data,
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            },
        });

        getMySelf();

        return dispatch({ type: ADD_CROP, payload: User.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })

    }
};


export const GetCrop = () => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `http://localhost:4000/crop/`,
        });

        getMySelf();

        return dispatch({ type: GET_CROP, payload: User.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })

    }
};



