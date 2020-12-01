import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state'




ReactDOM.render(
	<React.StrictMode>
		<App
			posts={state.profilePage.posts} 
			dialogs={state.dialogsPage.dialogs} 
			messages={state.dialogsPage.messages}
			friends={state.sideBar.friends} />
	</React.StrictMode>,
	document.getElementById('root')
);

