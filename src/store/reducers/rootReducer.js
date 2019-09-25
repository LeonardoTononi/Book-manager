import authReducer from './authReducer'
import booksReducer from './booksReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase' 

const rootReducer = combineReducers({
  auth: authReducer,
  books: booksReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer


