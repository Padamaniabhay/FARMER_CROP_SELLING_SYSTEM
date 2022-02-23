import axios from "axios"

//redux types
import { ADD_CROP, GET_CROP, GET_SEARCH_CROP, GET_SPECIFIC_CROP } from "./Crop.type";


//redux action
import { getMySelf } from "../User/User.action";


export const Addcrop = (data) => async (dispatch) => {
    try {
        const Crop = await axios({
            method: "POST",
            url: `http://localhost:4000/crop/addcrop`,
            data,
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            },
        });

        getMySelf();

        return dispatch({ type: ADD_CROP, payload: Crop.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })

    }
};


export const GetCrop = (category) => async (dispatch) => {
    try {
        const Crop = await axios({
            method: "GET",
            url: `http://localhost:4000/crop/${category}`,
        });

        getMySelf();

        return dispatch({ type: GET_CROP, payload: Crop.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })

    }
};


export const GetCropBySearch = (searchName,category) => async (dispatch) => {
    try {
        const Crop = await axios({
            method: "GET",
            url: `http://localhost:4000/crop/search/${category}/${searchName}`,
        });

        getMySelf();

        return dispatch({ type: GET_SEARCH_CROP, payload: Crop.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })

    }
};



export const getSpecificCrop = (_id) => async (dispatch) => {
    try {
        const crop = await axios({
            method: "GET",
            url: `http://localhost:4000/crop/specific/${_id}`,
        });

        return dispatch({ type: GET_SPECIFIC_CROP, payload: crop.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })

    }
};