import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './header.module.css';

const Header = (props) => {
    // debugger
    return (
        <header className={s.header} >
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png' alt='logo' />
            My Supppper Pupppper Social Network
                { props.auth.photo 
                    ? <img className={s.loginImg} src={props.auth.photo} alt='avatar' />
                    : null }
                <div className={s.login}>
                    {props.auth.isAuth 
                        ? <div>
                            <NavLink to="/profile">{props.auth.login}</NavLink>
                            <button onClick={props.logout} >exit</button>
                          </div>
                        : <NavLink to="/login">login</NavLink>}
                    </div>
            

        </header >
    )
}

export default Header;