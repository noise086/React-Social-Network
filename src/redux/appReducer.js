import { setLogin } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS})


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }

}

export const initializeApp = () => async (dispatch) => {
    await dispatch(setLogin());
    dispatch(initializedSuccess());
}

export default appReducer;