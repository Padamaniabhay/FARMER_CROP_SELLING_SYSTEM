import { combineReducers } from "redux";

import auth from "./Auth/Auth.reducer"
import user from "./User/User.reducer"

const rootReducer = combineReducers({auth,user});
export default rootReducer;