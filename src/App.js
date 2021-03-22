import React from 'react';
import HomePage from '../src/pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Switch, Route } from 'react-router-dom';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const useRef = await createUserProfileDocument(userAuth);

				useRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});

					console.log(this.state);
				});

				//in case userAuth is null, we want to set our currentUser back to null
			} else {
				this.setState({
					currentUser: userAuth,
				});

				console.log(this.state);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
