import axios from "axios";

// Redux types
import { CREATE_ORDER, ORDER_PLACED } from "./Order.type";

export const createOrder = (amount) => async (dispatch) => {
    try {
        const order = await axios({
            method: "POST",
            url: "http://localhost:4000/payment/new",
            data: { amount },
        });


        // console.log({ order });

        // dispatch(orderPlaced(order.data));

        return dispatch({ type: CREATE_ORDER, payload: order.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const orderPlaced = (cartData, userid) => async (dispatch) => {
    try {
        const placeOrder = cartData.map((CropItem) => {
            const orderDetails = {
                crop: CropItem._id,
                quantity: CropItem.quantity,
                paymode: "ONLINE",
                paymentDetails: {
                    itemTotal: (CropItem.price * CropItem.quantity),
                    promo: 0,
                    tax: 0,
                },
            };
            axios({
                method: "POST",
                url: `http://localhost:4000/order/new/${userid}`,
                data: { orderDetails },
            });
        });

        // console.log({cartData,userid});

        // await Promise.all(placeOrder);

        return dispatch({ type: ORDER_PLACED, payload: placeOrder.data, });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};