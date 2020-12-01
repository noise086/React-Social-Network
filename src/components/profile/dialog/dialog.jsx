import React from 'react';
import s from './dialog.module.css';
import DialogItem from './dialogItem/dialogItem';
import Message from "./message/message";



const Dialog = ({messagesData, dialogsData}) => {
    const dialogElements = dialogsData.map(elem => <DialogItem name={elem.name} id={elem.id} />)
    const messageElements = messagesData.map(m => <Message message={m.message} />)
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogsHeader}>Dialogs</div>
            <div className={s.dialogs}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>

        </div>
    )
}

export default Dialog;