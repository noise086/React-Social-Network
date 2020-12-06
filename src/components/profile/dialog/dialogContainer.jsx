import React from 'react';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../../redux/dialogsReducer';
import Dialog from './dialog';



const DialogContainer = ({state, dispatch}) => {
    const onMessageChange = (text) => {
        dispatch(onMessageChangeActionCreator(text));
    }

    const addMessage = () => {
        dispatch(addMessageActionCreator());
        dispatch(onMessageChangeActionCreator(''));
    }

    return <Dialog dialogsPage={state.dialogsPage} onMessageChange={onMessageChange} addMessage={addMessage} />
}

export default DialogContainer;