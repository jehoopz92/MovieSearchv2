import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movieActions';
import { Link } from 'react-router-dom';

class Movies extends Component {
	state = {
		movies: []
	}
	componentDidMount() {
		this.props.fetchMovies();
	}
	componentWillReceiveProps(props) {
				this.setState({ movies: props.movies})
	}
	render() {
			if(this.state.movies.length > 0) {
				console.log("state",this.state.movies)
				var movieItems = this.state.movies.map(movie => (
					<div className='gridItems' key={movie.id}>
						<Link to={`movies/${movie.id}`}>
							<img
								src={'https://image.tmdb.org/t/p/w185/' + movie.poster_path}
								alt={movie.original_title}
							/>
						</Link>
					</div>
				));
			} else {
				console.log("props",this.props.movies)
				var movieItems = this.props.movies.map(movie => (
					<div className='gridItems' key={movie.id}>
						<Link to={`movies/${movie.id}`}>
							<img
								src={'https://image.tmdb.org/t/p/w185/' + movie.poster_path}
								alt={movie.original_title}
							/>
						</Link>
					</div>
				));
			}
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
	movies: state.movies.movies,
	search: state.movies.search
});

export default connect(
	mapStateToProps,
	{ fetchMovies }
)(Movies);
