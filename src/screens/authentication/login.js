import React, { Component } from 'react';
import {
	AppRegistry,
	AsyncStorage,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	Image,
	View,
	StatusBar
} from 'react-native';

import { Header, CardSection, Button, Spinner, } from './../../components/common';

export default class Login extends Component {



	render() {
		return (
			<View>
				<Header>Smack Talk!</Header>
				<CardSection>
					<Button
						title="Login"
					/>
				</CardSection>
			</View>


		);
	}
}

AppRegistry.registerComponent('', () => Login);

