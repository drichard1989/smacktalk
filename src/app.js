'use strict';
import React, { Component } from 'react';
import { ActivityIndicator, View, Navigator } from 'react-native';
import { Header, CardSection, Button, Spinner } from './components/common';
import Login from './screens/authentication/login';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			component: Login
		}
	}
	// 	this.onAuthStateChangedObserverUnsubscribe = null;
	// }

	// componentWillMount = () => {
	// 	// mount the firebase observer and set the return function to the unsubscribe property
	// 	this.onAuthStateChangedObserverUnsubscribe = auth.onAuthStateChanged((user) => {
	// 		if (user) {
	// 			// if a user is return, then the user is currently logged in
	// 			// redirect user to the Account page
	// 			this.setState({ component: Login });
	// 		} else {
	// 			// if a user is not returned, the user is currently not logged in
	// 			// redirect user to the Login page
	// 			this.setState({ component: Login });
	// 		}
	// 	});
	// }


	render() {
		return (
			<Navigator
				initialRoute={{ component: this.state.component }}
				configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
				renderScene={(route, navigator) => {
					if (route.component) {
						return React.createElement(route.component, { navigator });
					}
				}}
			/>
		);
	}
}