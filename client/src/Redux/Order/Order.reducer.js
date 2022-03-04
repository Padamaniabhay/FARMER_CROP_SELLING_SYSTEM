import { ORDER_PLACED,CREATE_ORDER } from "./Order.type";

const INITIAL_STATE = {};

const OrderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
}

export default OrderReducer;


