import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Nav from './components/navBar/navBar';
import Dialog from './components/profile/dialog/dialog';
import Profile from './components/profile/profile';


function App() {
	return (
		<BrowserRouter>
			<div className='appWrapper'>
				<Header />
				<Nav />
				<div className="appWrapperContent">
					<Route path="/profile" component={Profile} >
					</Route>
					<Route path="/dialog" component={Dialog} >
					</Route>
				</div>

			</div>
		</BrowserRouter>

	)

}

export default App;
