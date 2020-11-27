import React from 'react';
import s from './navBar.module.css';

const Nav = () => {
    return (
		<nav className={s.nav}>
			<div className={s.item}>
				<a href="#">Profile</a>
			</div>
			<div className={s.item}>
				<a href="#">News</a>
			</div>
			<div className={s.item}>
				<a href="#">Messages</a>
			</div>
			<div className={s.item}>
				<a href="#">Music</a>
			</div>
			<div className={s.item}>
				<a href="#">Settings</a>
			</div>
		</nav>
    )
}

export default Nav;