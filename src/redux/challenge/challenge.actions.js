export const setChallenge = (nBook) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    firestore.collection('booksChallenge').doc(uid).set({
        number: nBook,
        hiddenInput: true
    }).then(() => {
      dispatch({
        type: 'SET_CHALLENGE',
        payload: nBook
      });
    }).catch((err) => {
      dispatch({
        type: 'SET_CHALLENGE_ERROR',
        payload: err
      })
    })
  }
}


 /* const existingChallenge = challengePath.onSnapshot(docSnapshot => {
      return true
    }, err => {
        return false
    })
    if (existingChallenge) return getState(); */