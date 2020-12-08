import React from 'react';
import s from '../navBar.module.css';

const FriendsList = ({navBar}) => {
	const friend = navBar.friends.map( f => {
		return <div className={s.friend} > 
					{f.name}
					<img src={f.avatar} alt="avatar" />
				</div>
	})
	return friend
}

export default FriendsList;