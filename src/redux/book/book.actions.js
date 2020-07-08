export const addBook = book => ({
  type: 'ADD_BOOK',
  payload: book
});

export const deleteBook = book => ({
  type: 'DELETE_BOOK',
  payload: book
});
/* 

export const addBook = book => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to db(
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    firestore
      .collection('books')
      .add({
        ...book,
        userID: uid,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: 'ADD_BOOK',
          payload: book
        });
      })
      .catch(err => {
        dispatch({
          type: 'ADD_BOOK_ERROR',
          payload: err
        });
      });
  };
};

export const deleteBook = (id, books) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    // retrive DOC id
    firestore
      .collection('books')
      .where('id', '==', id)
      .get()
      .then(snapShot =>
        snapShot.forEach(doc => {
          // delete book document
          firestore
            .collection('books')
            .doc(doc.id)
            .delete()
            .then(() => {
              return dispatch({
                type: 'DELETE_BOOK',
                payload: books
              });
            })
            .catch(err => {
              dispatch({
                type: 'DELETE_BOOK_ERROR',
                payload: err
              });
            });
        })
      )
      .catch(err => console.log(err));
  };
};
 */
