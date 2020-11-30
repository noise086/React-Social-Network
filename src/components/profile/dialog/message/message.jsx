import React from 'react';
import s from './../dialog.module.css';

const Message = (props) => {
        return (
            <div className={s.message}>{props.message}</div>
        )
    }
export default Message;