import React from 'react';
import { reduxForm } from 'redux-form';
import s from './dialog.module.css';
import { DialogsForm } from './dialogForm/dialogForm';
import DialogItem from './dialogItem/dialogItem';
import Message from "./message/message";




const Dialog = (props) => {
    
    const dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)

    const messageElements = props.dialogsPage.messages.map(m => {
        if (m.myMessage) {
            return <Message key={m.id} message={m.message} style={`${s.message} ${s.myMessage}`} />
        } else {
            return <Message key={m.id} message={m.message} style={`${s.message}`} />
        }
    })


    const addMessage = (values) => {
        props.addMessage(values.textarea);
        values.textarea = ''
    }

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogsHeader}>Dialogs</div>
            <div className={s.dialogs}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <DialogsFormRedux onSubmit={addMessage} />
            </div>
        </div>
    )
}

const DialogsFormRedux = reduxForm({ form: 'Dialogs' })(DialogsForm)

export default Dialog;