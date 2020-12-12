import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../../redux/dialogsReducer';
import Dialog from './dialog';


let mapStateToProps = (state) => {
    
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        }
    }

}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps) (Dialog);

export default DialogContainer;