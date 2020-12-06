import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Nav from './components/navBar/navBar';
import DialogContainer from './components/profile/dialog/dialogContainer';
import Profile from './components/profile/profile';


function App({store, state}) {
	return (
		<BrowserRouter>
			<div className='appWrapper'>
				<Header />
				<Nav friends={state.sideBar.friends} />
				<div className="appWrapperContent">
					<Route 
						path="/profile" 
						render={() => <Profile 
							store={store} state={state} />} >
					</Route>
					<Route 
						path="/dialog" 
						render={() => <DialogContainer
							state={state}
							dispatch={store.dispatch.bind(store)} />} >
					</Route>
				</div>

			</div>
		</BrowserRouter>

	)

}

export default App;
