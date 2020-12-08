import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import NavBarContainer from './components/navBar/navBarContainer';
import DialogContainer from './components/profile/dialog/dialogContainer';
import Profile from './components/profile/profile';
import UsersContainer from './components/profile/users/usersContainer';


function App() {
	return (
		<BrowserRouter>
			<div className='appWrapper'>
				<Header />
				<NavBarContainer/>
				<div className="appWrapperContent">
					<Route 
						path="/profile" 
						render={() => <Profile />} >
					</Route>
					<Route 
						path="/dialog" 
						render={() => <DialogContainer />} >
					</Route>
					<Route 
						path="/users" 
						render={() => <UsersContainer />} >
					</Route>
				</div>

			</div>
		</BrowserRouter>

	)

}

export default App;
