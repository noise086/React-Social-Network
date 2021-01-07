import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Preloader from './components/common/preloader/preloader';
import HeaderContainer from './components/header/headerContainer';
import Login from './components/login/login';
import NavBarContainer from './components/navBar/navBarContainer';
import DialogContainer from './components/profile/dialog/dialogContainer';
import ProfileContainer from './components/profile/profileContainer';
import UsersContainer from './components/profile/users/usersContainer';
import { initializeApp } from './redux/appReducer';
import store from './redux/redux-store'

class App extends Component {

	componentDidMount() {
		this.props.initializeApp()
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (

			<div className='appWrapper'>
				<HeaderContainer />
				<NavBarContainer />
				<div className="appWrapperContent">
					<Route
						path="/profile/:userId?"
						render={() => <ProfileContainer />}>
					</Route>
					<Route
						path="/dialog"
						render={() => <DialogContainer />}>
					</Route>
					<Route
						path="/users"
						render={() => <UsersContainer />}>
					</Route>
					<Route
						path="/login"
						render={() => <Login />}>
					</Route>
				</div>

			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, { initializeApp })(App);

const SamuraiJSApp = () => {
	return (
	<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
	</BrowserRouter>
)}

export default SamuraiJSApp;