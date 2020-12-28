import { setLogin } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS, initialized: true})


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case 'INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }

}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(setLogin());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    })

  
}

export default appReducer;