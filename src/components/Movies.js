import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movieActions';
import { Link } from 'react-router-dom';

class Movies extends Component {
	componentDidMount() {
		this.props.fetchMovies();
	}
	render() {
		console.log(this.props.movies);
		const movieItems = this.props.movies.map(movie => (
			<div className='gridItems' key={movie.id}>
				<Link to={`movies/${movie.id}`}>
					<img
						src={'https://image.tmdb.org/t/p/w185/' + movie.poster_path}
						alt={movie.original_title}
					/>
				</Link>
			</div>
		));
		return (
			<React.Fragment>
				<div className='grid'>{movieItems}</div>
			</React.Fragment>
		);
	}
}

Movies.propTypes = {
	fetchMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	movies: state.movies.movies
});

export default connect(
	mapStateToProps,
	{ fetchMovies }
)(Movies);
