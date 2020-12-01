import React from 'react';
import s from './../dialog.module.css';

const Message = (props) => {
        return (
            <div>
                <div className={props.style}>{props.message}</div>
            </div>
        )
    }
export default Message;