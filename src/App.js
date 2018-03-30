import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

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
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return(
			<Provider store={store}>
				<Router />
			</Provider>
			)
	}
}