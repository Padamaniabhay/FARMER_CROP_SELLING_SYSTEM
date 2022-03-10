import { ADD_CROP,GET_CROP,GET_SPECIFIC_CROP,GET_SEARCH_CROP,GET_USER_CROP } from "./Crop.type";

const INITIAL_STATE = {};

const CropReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CROP:
            return {
                ...state,
            };
        case GET_CROP:
            return {
                ...state,
                crop: action.payload,
            };
        case GET_USER_CROP:
            return {
                ...state,
                crop: action.payload,
            };
        case GET_SEARCH_CROP:
            return {
                ...state,
                crop: action.payload,
            };
        case GET_SPECIFIC_CROP:
            return {
                ...state,
                crop:action.payload,
            }
        default:
            return { ...state };
    }
}

export default CropReducer;


