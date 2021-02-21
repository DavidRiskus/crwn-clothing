import React from 'react';
import HomePage from '../src/pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

import './App.css';

const Hats = (props) => {
	console.log(props);

	return (
		<div>
			<h1>Hats</h1>
		</div>
	);
};

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/hats' component={Hats} />
			</Switch>
		</div>
	);
}

export default App;
