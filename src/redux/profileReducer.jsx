const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) => ({type: ON_POST_CHANGE, text: text})

let initialState = { 
    posts: [
        { id: 1, message: 'Hello world', likescount: 3 },
        { id: 2, message: 'Its my third post', likescount: 10 },
        { id: 3, message: 'Its my second post', likescount: 13 },
        { id: 4, message: 'Its my first post', likescount: 23 },
    ],
newMessageText: 'type message'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText,
                likescount: 0
            }
            state.posts.push(newPost);
            return state
        case ON_POST_CHANGE:
            state.newPostText = action.text;
            return state
        default: 
            return state
    }

}

export default profileReducer;