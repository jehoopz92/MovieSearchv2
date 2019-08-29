import {
    FETCH_MOVIES,
    FETCH_MOVIE,
    FETCH_VIDEO
} from './types'
import axios from 'axios'

export const fetchMovies = () => dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4946eaca551508f868de8a08376251af&language=en-US&page=1`)
        .then(movies => dispatch({
            type: FETCH_MOVIES,
            payload: movies.data.results
        }))
}

export const fetchMovie = id => dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=4946eaca551508f868de8a08376251af`)
        .then(movie => {
            const id = movie.data.imdb_id

            axios.get(`http://www.omdbapi.com/?i=${id}&apikey=bf52f53e`)
                .then(movie => dispatch({
                    type: FETCH_MOVIE,
                    payload: movie.data
                }))
        })
}

export const fetchVideo = id => dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4946eaca551508f868de8a08376251af&language=en-US`)
        .then(video => dispatch({
            type: FETCH_VIDEO,
            payload: video.data.results
        }))
}