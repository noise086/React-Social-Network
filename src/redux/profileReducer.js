import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE_POST';

export const addPost = (text) => ({ type: ADD_POST, text: text })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

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
        case DELETE_POST: {
            return {
                ...state, 
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        
        default:
            return state
    }
}

export const setProfileTC = (userId) => async (dispatch) => {
    let res = await usersAPI.getProfile(userId)
                dispatch(setProfile(res));
}
export const setStatusTC = (userId) => async (dispatch) => {
    let res = await profileAPI.setStatus(userId)
                dispatch(setStatus(res.data));
}
export const updateStatusTC = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus (status))
            }
}

export default profileReducer;