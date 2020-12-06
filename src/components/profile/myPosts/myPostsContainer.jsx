import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer';
import MyPosts from './myPosts';





const MyPostsContainer = ({state, dispatch}) => {
    const addPosts = () => {
        dispatch(addPostActionCreator());
        dispatch(onPostChangeActionCreator(''));
    }

    const onPostChange = (text) => {
        dispatch(onPostChangeActionCreator(text))
    }
    return (
        <MyPosts profilePage={state.profilePage} addPosts={addPosts} onPostChange={onPostChange} />
    )

}

export default MyPostsContainer;