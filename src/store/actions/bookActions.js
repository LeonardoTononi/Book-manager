export const addBook = (book) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to db(
    const firestore = getFirestore();
    const userID = getState().firebase.auth.uid;
    firestore.collection('books').add({
      ...book,
      userID: userID,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_BOOK', book })
    }).catch((err) => {
      dispatch({type: 'ADD_BOOK_ERROR', err})
    })
  } 
}

