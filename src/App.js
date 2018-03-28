import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		 const config = {
	    apiKey: 'AIzaSyBwKj8CXxxtPte6gsBtlrFnU5NpJis4NmE',
	    authDomain: 'manager-79502.firebaseapp.com',
	    databaseURL: 'https://manager-79502.firebaseio.com',
	    projectId: 'manager-79502',
	    storageBucket: 'manager-79502.appspot.com',
	    messagingSenderId: '776728316514'
	  };
	  firebase.initializeApp(config);
	}
	render() {
		return(
			<Provider store={createStore()}>
				<LoginForm />
				</View>
			</Provider>
			)
	}
}