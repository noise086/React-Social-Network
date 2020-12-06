import React from 'react';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../../redux/dialogsReducer';
import s from './dialog.module.css';
import DialogItem from './dialogItem/dialogItem';
import Message from "./message/message";



const Dialog = ({state, dispatch}) => {
    const dialogElements = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}  />)

    const messageElements = state.dialogsPage.messages.map(m => {
        if (m.myMessage) {
            return <Message message={m.message} style={`${s.message} ${s.myMessage}`} />
        } else {
            return <Message message={m.message} style={`${s.message}`} />
        }
    })

    const onMessageChange = (e) => {
        let text = e.target.value;
        dispatch(onMessageChangeActionCreator(text));
    }

    const addMessage = () => {
        dispatch(addMessageActionCreator());
        dispatch(onMessageChangeActionCreator(''));
    }

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogsHeader}>Dialogs</div>
            <div className={s.dialogs}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.textareaWrapper}>
                    <textarea  type='text'
                            value={state.dialogsPage.newMessageText}
                            className={s.textarea} 
                            onChange={onMessageChange} 
                    ></textarea>
                    <button 
                        className={s.button}
                        onClick={addMessage} >sand</button>
                </div>
            </div>
        </div>
    )
}

export default Dialog;