import React from 'react';
import s from './dialog.module.css';
import DialogItem from './dialogItem/dialogItem';
import Message from "./message/message";


let dialogData = [
    { id: 1, name: 'Dick' },
    { id: 2, name: 'Kaliph' },
    { id: 3, name: 'Sasha' },
    { id: 4, name: 'Natasha' },
    { id: 5, name: 'Vitro' },
    { id: 6, name: 'Elena' },
];

let messageData = [
    { id: 1, message: "Hi" },
    { id: 2, message: 'How arw you' },
    { id: 3, message: 'Who is it' },
    { id: 4, message: "Fuck you" },
    { id: 5, message: "Go drink" },
    { id: 6, message: "Hi" },
];


const dialogElements = dialogData.map(elem => {
    return <DialogItem name={elem.name} id={elem.id} />
})

const messageElements = messageData.map(m => <Message message={m.message} />)


const Dialog = () => {
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