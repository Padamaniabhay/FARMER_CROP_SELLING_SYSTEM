import { ORDER_PLACED,CREATE_ORDER,GET_ORDER } from "./Order.type";

const INITIAL_STATE = {};

const OrderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ORDER:
      return {
        ...state,
        order: action.payload,
      };
        default:
            return { ...state };
    }
}

export default OrderReducer;


