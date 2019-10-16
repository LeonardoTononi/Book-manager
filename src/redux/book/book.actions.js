export const addBook = (book) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to db(
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    firestore.collection('books')
      .add({
        ...book,
        userID: uid,
      createdAt: new Date()
    }).then(() => {
      dispatch({
        type: 'ADD_BOOK',
        payload: book
      });
    }).catch((err) => {
      dispatch({
        type: 'ADD_BOOK_ERROR',
        payload: err
      })
    })
  } 
}

export const deleteBook = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('books').doc(id).delete()
    .then(() => {
      dispatch({
        type: 'DELETE_BOOK',
        payload: id
      })
  }).catch(err => {
    dispatch({
      type: 'DELETE_BOOK_ERROR',
      payload: err
    })
    });
  }
}
