import React from 'react';
import s from './header.module.css';

const Header = () => {
    return (
        <header className={s.header} >
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png' alt='logo' />
            My Supppper Pupppper Social Network
        </header >
    )
}

export default Header;