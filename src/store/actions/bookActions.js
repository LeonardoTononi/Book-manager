export const addBook = (book) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to db(
    const firestore = getFirestore();
    firestore.collection('books').add({
      ...book,
      userID: "ArHPBSmGfQUlLFoREXXvAMWqICV2",
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_BOOK', book })
    }).catch((err) => {
      dispatch({type: 'ADD_BOOK_ERROR', err})
    })
  } 
}

