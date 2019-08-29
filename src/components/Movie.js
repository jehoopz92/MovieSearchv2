import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/movieActions';
import { fetchVideo } from '../actions/movieActions';
import Imdb from '../assets/imdb.png';
import Tomato from '../assets/tomato.png';
import Meta from '../assets/meta.png';

class Movie extends Component {
	componentDidMount() {
		this.props.fetchMovie(this.props.match.params.id);
		this.props.fetchVideo(this.props.match.params.id);
	}
	render() {
		if (
			this.props.movie === undefined ||
			(this.props.movie === 0 && this.props.video === undefined) ||
			this.props.video === 0
		) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			);
		} else {
			const movie = this.props.movie;
			const video = this.props.video;
			if (movie.Ratings) {
				var ratings = movie.Ratings.map(rating => (
					<li
						className='list-group-item d-flex justify-content-between mt-5 align-items-center'
						style={listColor}
						key={rating.Source}
					>
						<img
							src={
								rating.Source === 'Rotten Tomatoes'
									? `${Tomato}`
									: rating.Source === 'Internet Movie Database'
									? `${Imdb}`
									: rating.Source === 'Metacritic'
									? `${Meta}`
									: 'Nothing To Display'
							}
							alt='IMDb'
							style={custImg}
						/>
						<p className='m-0'>{rating.Value}</p>
					</li>
				));
			}
			if (video[0]) {
				var vidKey = video[0].key;
				console.log(vidKey);
			}
			return (
				<div className='row mt-5'>
					<div className='col-lg-4'>
						<img src={movie.Poster} alt={movie.Title} />
						<br />
						<ul className='list-group mt-5'>{ratings}</ul>
					</div>

					<div className='col-lg-8'>
						<div className='card' style={accentColor}>
							<div className='card-header' style={accentColorBottom}>
								{movie.Title}
							</div>
							<div className='card-body'>
								<ul className='list-group'>
									<li className='list-group-item' style={accentColor}>
										<strong>Actors:</strong> {movie.Actors}
									</li>

									<li className='list-group-item' style={accentColor}>
										<strong>Genre:</strong> {movie.Genre}
									</li>

									<li className='list-group-item' style={accentColor}>
										<strong>Director:</strong> {movie.Director}
									</li>

									<li className='list-group-item' style={accentColor}>
										<strong>Rating:</strong> {movie.Rated}
									</li>

									<li className='list-group-item' style={accentColor}>
										<strong>Runtime:</strong> {movie.Runtime}
									</li>

									<li className='list-group-item' style={accentColor}>
										<strong>Release Date:</strong> {movie.Released}
									</li>

									<li className='list-group-item' style={accentColor}>
										<strong>Plot:</strong> {movie.Plot}
									</li>
								</ul>
							</div>
						</div>
						<br />
						<iframe
							src={`https://www.youtube.com/embed/${vidKey}`}
							height='50%'
							width='100%'
						></iframe>
					</div>
				</div>
			);
		}
	}
}

Movie.propTypes = {
	fetchMovie: PropTypes.func.isRequired,
	fetchVideo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	movie: state.movies.movie,
	video: state.movies.video
});

const listColor = {
	backgroundColor: '#162530',
	width: '86%'
};

const accentColor = {
	backgroundColor: '#162530'
};

const accentColorBottom = {
	backgroundColor: '#162530',
	borderBottom: '2px solid white'
};

const custImg = {
	height: '50px',
	width: '50px',
	borderRadius: '50%'
};

export default connect(
	mapStateToProps,
	{ fetchMovie, fetchVideo }
)(Movie);
