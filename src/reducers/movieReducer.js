import {
    FETCH_MOVIES,
    FETCH_MOVIE,
    FETCH_VIDEO
} from '../actions/types'

const initialState = {
    movies: [],
    movie: [],
    video: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
            case FETCH_MOVIE:
                return {
                    ...state,
                    movie: action.payload
                }
                case FETCH_VIDEO:
                    return {
                        ...state,
                        video: action.payload
                    }
                    default:
                        return state;
    }
}