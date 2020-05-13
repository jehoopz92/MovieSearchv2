import {
    FETCH_MOVIES,
    FETCH_MOVIE,
    FETCH_VIDEO,
    SEARCH_MOVIE
} from '../actions/types'

const initialState = {
    movies: [],
    movie: [],
    search: [],
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

                    case SEARCH_MOVIE:
                        return {
                            ...state,
                            movies: action.payload
                        }
                        default:
                            return state;
    }
}