import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../dialog.module.css';

const DialogItem = ({name, id}) => {
        const path = `/dialog/${id}`;
        return (
            <div>
                <NavLink activeClassName={s.active} to={path} className={s.dialogItem}>{name}</NavLink>
            </div>
            
        )
    }
export default DialogItem;