import userReducer from './user/user.reducer';
import bookReducer from './book/book.reducer';
import challengeReducer from './challenge/challenge.reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  user: userReducer,
  shelf: bookReducer,
  challenge: challengeReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
