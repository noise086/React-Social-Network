import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state'




ReactDOM.render(
	<React.StrictMode>
		<App
			postsData={state.profilePage.posts} 
			dialogsData={state.dialogsPage.dialogs} 
			messagesData={state.dialogsPage.messages} />
	</React.StrictMode>,
	document.getElementById('root')
);

