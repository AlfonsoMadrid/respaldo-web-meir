import { types } from "../types/types"
import { finishLoading, startLoading } from "./ui";


export const startLogin = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading());

        setTimeout(() => {
            dispatch(finishLoading());
            dispatch(login(123, 'Admin'));
        }, 3500);

        

    }
}

export const login = (uid , displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
})