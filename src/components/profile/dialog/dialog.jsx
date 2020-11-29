import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './dialog.module.css';


const DialogItem = (props) => {
    const path = `/dialog/${props.id}`;
    return (
        <NavLink to={path} className={s.dialogItem}>{props.name}</NavLink>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialog = () => {
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogsHeader}>Dialogs</div>
            <div className={s.dialogs}>
                <DialogItem name="Ditch" id="1" />
                <DialogItem name="Kaliph" id="2" />
                <DialogItem name="Sasha" id="3" />
                <DialogItem name="Natasha" id="4" />
                <DialogItem name="Vitro" id="5" />
                <DialogItem name="Elena" id="6" />

            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How arw you" />
                <Message message="Who is it" />
                <Message message="Fuck you" />
                <Message message="Go drink" />
                <Message message="Hi" />
            </div>

        </div>
    )
}

export default Dialog;