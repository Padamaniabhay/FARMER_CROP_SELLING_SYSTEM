import { ADD_CROP,GET_CROP } from "./Crop.type";

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
        default:
            return { ...state };
    }
}

export default CropReducer;


