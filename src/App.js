import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Main from './components/Main';
import Movie from './components/Movie';

import './App.css';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className='App'>
						<Navbar />
						<div className='container'>
							<Route exact path='/' render={Main} />
							<Route path='/movies/:id' component={Movie} />
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
