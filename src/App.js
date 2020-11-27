import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/navBar/navBar';
import Profile from './components/profile/profile';


function App() {
  	return (
		<div className='appWrapper'>
			<Header />
			<Nav />
			<Profile />
		</div>
  	
  	)
	 
}

export default App;
