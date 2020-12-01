import React from 'react';
import s from './dialog.module.css';
import DialogItem from './dialogItem/dialogItem';
import Message from "./message/message";



const Dialog = ({messages, dialogs}) => {
    const dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}  />)

    const messageElements = messages.map(m => {
        if (m.myMessage) {
            return <Message message={m.message} style={`${s.message} ${s.myMessage}`} />
        } else {
            return <Message message={m.message} style={`${s.message}`} />
        }
    })
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogsHeader}>Dialogs</div>
            <div className={s.dialogs}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.textareaWrapper}>
                    <textarea className={s.textarea}></textarea>
                    <button className={s.button}>sand</button>
                </div>
            </div>
        </div>
    )
}

export default Dialog;