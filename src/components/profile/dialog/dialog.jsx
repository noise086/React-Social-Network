import React from 'react';
import s from './dialog.module.css';
import DialogItem from './dialogItem/dialogItem';
import Message from "./message/message";



const Dialog = (props) => {
    // debugger
    const dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}  />)

    const messageElements = props.dialogsPage.messages.map(m => {
        if (m.myMessage) {
            return <Message key={m.id} message={m.message} style={`${s.message} ${s.myMessage}`} />
        } else {
            return <Message key={m.id} message={m.message} style={`${s.message}`} />
        }
    })

    const onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
    }

    const addMessage = () => {
        props.addMessage();
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
                            value={props.dialogsPage.newMessageText}
                            className={s.textarea} 
                            onChange={onMessageChange} 
                    ></textarea>
                    <button 
                        className={s.button}
                        onClick={addMessage} >send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialog;