import axios from "axios"

//redux types
import { SIGN_IN, SIGN_UP, GOOGLE_AUTH, SIGN_OUT } from "./Auth.type";


//redux action
import { getMySelf, clearUser } from "../User/User.action";


export const signIn = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST",
            url: `http://localhost:4000/auth/signin`,
            data: { credentials: userData },
        });

        getMySelf();

        localStorage.setItem("cropUser", JSON.stringify({ token: User.data.token }));

        window.location.href = "http://localhost:3000/";

        return dispatch({ type: SIGN_IN, payload: User.data })
    } catch (error) {
        // console.log({ error });
        alert(error.response.data.error);
        return dispatch({ type: "ERROR", payload: error })

    }
};

export const signUp = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST",
            url: `http://localhost:4000/auth/signup`,
            data: { credentials: userData },
        });

        getMySelf();

        localStorage.setItem("cropUser", JSON.stringify({ token: User.data.token }));
        window.location.href = "http://localhost:3000/";

        return dispatch({ type: SIGN_UP, payload: User.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })

    }
};


export const googleAuth = (token) => async (dispatch) => {
    try {
        localStorage.setItem("cropUser", JSON.stringify({ token }));

        getMySelf();

        return dispatch({ type: GOOGLE_AUTH, payload: {} });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};


export const signOut = () => async (dispatch) => {
    try {
        localStorage.removeItem("cropUser",);
        clearUser();
        window.location.href = "http://localhost:3000/";

        return dispatch({ type: SIGN_OUT, payload: {} })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })

    }
};
