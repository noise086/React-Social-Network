const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';
const SET_PROFILE = 'SET-PROFILE';

export const addPostActionCreator = () => ({ type: ADD_POST })
export const onPostChangeActionCreator = (text) => ({ type: ON_POST_CHANGE, text: text })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })

let initialState = {
    posts: [
        { id: 1, message: 'Hello world', likescount: 3 },
        { id: 2, message: 'Its my third post', likescount: 10 },
        { id: 3, message: 'Its my second post', likescount: 13 },
        { id: 4, message: 'Its my first post', likescount: 23 },
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likescount: 0
            }
            return {
                ...state,
                posts: [...state.posts, { ...newPost }],
                newPostText: ''
            }
        }
        case ON_POST_CHANGE: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        case SET_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state
    }
}
// debugger
export default profileReducer;