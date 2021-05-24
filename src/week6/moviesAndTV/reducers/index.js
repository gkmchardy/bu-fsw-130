import { combineReducers } from 'redux'
import movieReducer from './movies'
import showReducer from './shows'

const allReducers = combineReducers({
    movies: movieReducer,
    shows: showReducer
})

export default allReducers