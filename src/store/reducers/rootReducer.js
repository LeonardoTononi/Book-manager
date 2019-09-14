import authReducer from './authReducer'
import booksReducer from './booksReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  books: booksReducer
})

export default rootReducer