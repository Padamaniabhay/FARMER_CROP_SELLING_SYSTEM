import { combineReducers } from "redux";

import auth from "./Auth/Auth.reducer"
import user from "./User/User.reducer"
import crop from "./Crop/Crop.reducer"
import image from "./Image/Image.reducer"
import cart from "./Cart/Cart.reducer"
import Order from "./Order/Order.reducer";

const rootReducer = combineReducers({ auth, user, crop, image, cart, Order });
export default rootReducer;