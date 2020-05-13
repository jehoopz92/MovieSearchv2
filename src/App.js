import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

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
				<HashRouter basename="/">
					<div className='App'>
						<Navbar />
						<div className='container'>
							<Route exact path='/' render={Main} />
							<Route exact path='/movies/:id' component={Movie} />
						</div>
					</div>
				</HashRouter>
			</Provider>
		);
	}
}

export default App;
