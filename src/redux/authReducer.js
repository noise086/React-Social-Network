import { stopSubmit } from "redux-form";
import { usersAPI, authAPI } from "../api/api";

const SET_USER_LOGIN = 'SET_USER_LOGIN';
const SET_CURRENT_USER = 'SET_CURRENT_USER'

export const setUserLogin = (id, login, email, isAuth) => ({ type: SET_USER_LOGIN, data: { id, login, email, isAuth } })
export const setCurrentUser = (fullName, photo) => ({ type: SET_CURRENT_USER, data: { fullName, photo } })


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    fullName: null,
    photo: null
};

const authReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case 'SET_USER_LOGIN':
            return {
                ...state,
                ...action.data,
                // isAuth: true
            }
        case 'SET_CURRENT_USER':
            return {
                ...state,
                ...action.data
            }

        default:
            return state
    }

}

export const setLogin = () => async (dispatch) => {
    let data = await authAPI.me()
    if (data.data.resultCode === 0) {
        let { id, login, email } = data.data.data
        dispatch(setUserLogin(id, login, email, true));
        let res = await usersAPI.getProfile(id)
        let fullName = res.data.fullName
        let photo = res.data.photos.large
        dispatch(setCurrentUser(fullName, photo))

    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {

    let data = await authAPI.signIn(email, password, rememberMe)
            console.log(data);
            if (data.data.resultCode === 0) {
                dispatch(setLogin());
            } else {
                let message = data.data.messages.length > 0 ? data.data.messages[0] : 'Something wrong';
                dispatch(stopSubmit('login', { _error: message }));
            }
}

export const logout = () => async (dispatch) => {
    let data = await authAPI.signOut()
            if (data.data.resultCode === 0) {
                dispatch(setUserLogin(null, null, null, false))
            }
}

export default authReducer;