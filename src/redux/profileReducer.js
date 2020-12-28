import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';

export const addPost = (text) => ({ type: ADD_POST, text: text })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

let initialState = {
    posts: [
        { id: 1, message: 'Hello world', likescount: 3 },
        { id: 2, message: 'Its my third post', likescount: 10 },
        { id: 3, message: 'Its my second post', likescount: 13 },
        { id: 4, message: 'Its my first post', likescount: 23 },
    ],
    profile: null,
    status: 'hello'
}

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: action.text,
                likescount: 0
            }
            return {
                ...state,
                posts: [...state.posts, { ...newPost }],
            }
        }
        case SET_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        
        default:
            return state
    }
}

export const setProfileTC = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
            .then(res => {
                dispatch(setProfile(res));
            })
}
export const setStatusTC = (userId) => (dispatch) => {
    profileAPI.setStatus(userId)
            .then(res => {
                dispatch(setStatus(res.data));
            })
}
export const updateStatusTC = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then( response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus (status))
            }
        })
}

export default profileReducer;