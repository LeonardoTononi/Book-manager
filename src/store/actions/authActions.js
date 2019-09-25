export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({type: 'LOGIN_SUCCESS'})
    }).catch(err => {
      dispatch({type: 'LOGIN_ERROR', err })
    })
  }
}

export const signInWithProvider = (provider) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    firebase.auth().signInWithPopup(provider).then(() => {
      dispatch({ type: 'LOGIN_WITH_GOOGLE_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'LOGIN_WITH_GOOGLE_ERROR'})
    })
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS '})
    })

  }
}