import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../dialog.module.css';

const DialogItem = (props) => {
        const path = `/dialog/${props.id}`;
        return (
            <NavLink to={path} className={s.dialogItem}>{props.name}</NavLink>
        )
    }
export default DialogItem;