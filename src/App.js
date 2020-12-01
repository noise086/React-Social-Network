import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Nav from './components/navBar/navBar';
import Dialog from './components/profile/dialog/dialog';
import Profile from './components/profile/profile';


function App({messagesData, dialogsData, postsData}) {
	return (
		<BrowserRouter>
			<div className='appWrapper'>
				<Header />
				<Nav />
				<div className="appWrapperContent">
					<Route path="/profile" render={ () => <Profile postsData={postsData} />} >
					</Route>
					<Route path="/dialog" render={() => <Dialog messagesData={messagesData} dialogsData={dialogsData} />} >
					</Route>
				</div>

			</div>
		</BrowserRouter>

	)

}

export default App;
