import React from 'react';
import './App.css';
import Header from './components/header';
import Nav from './components/nav-bar';
import Profile from './components/profile';


function App() {
  	return (
		<div className='app-wrapper'>
			<Header />
			<Nav />
			<Profile />
		</div>
  	
  	)
	 
}

export default App;
