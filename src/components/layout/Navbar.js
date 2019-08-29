import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pumpkin from '../../assets/pumpkin.png';

class Navbar extends Component {
	render() {
		return (
			<nav className='navbar navbar-expand-lg' style={navColor}>
				<div className='container'>
					<Link to='/' className='navbar-brand text-white'>
						MovieSearchApp
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon' />
					</button>

					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav mr-auto'>
							<li className='nav-item active'>
								<a className='nav-link' href='#'>
									<img src={Pumpkin} alt='Pumpkin' style={img} />{' '}
									<span className='sr-only'>(current)</span>
								</a>
							</li>
						</ul>
						<form className='form-inline my-2 my-lg-0'>
							<input
								type='search'
								name='searchItem'
								className='form-control mr-sm-2'
								placeholder='Search Movies...'
								aria-label='Search'
							/>
							<button type='submit' className='btn my-2 my-sm-0 btn-outline-secondary'>
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		);
	}
}

const navColor = {
	backgroundColor: '#051d2c',
	width: '100%',
	color: '#fff'
};

const img = {
	width: '30px'
};

export default Navbar;
