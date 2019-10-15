import userReducer from './user/user.reducer'
import bookReducer from './booksReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase' 

const rootReducer = combineReducers({
  user: userReducer,
  books: bookReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer


