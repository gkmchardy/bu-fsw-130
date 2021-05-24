import { combineReducers } from 'redux'
import cookieReducer from './cookieReducer'
import milkReducer from './milkReducer'

const rootReducer = combineReducers({
  cookie: cookieReducer,
  milk: milkReducer,
})

export default rootReducer