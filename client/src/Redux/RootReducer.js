import { combineReducers } from "redux";

import auth from "./Auth/Auth.reducer"
import user from "./User/User.reducer"
import crop from "./Crop/Crop.reducer"

const rootReducer = combineReducers({auth,user,crop});
export default rootReducer;