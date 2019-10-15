const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR': 
      console.log('login error');
      return {
        ...state, 
        currentUser: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        currentUser: null
      }
    case 'SIGNOUT_SUCCESS': 
      console.log('signout success')
      return state
    case 'LOGIN_WITH_GOOGLE_SUCCESS': 
      console.log('login with google success')
      return {
        ...state,
        currentUser: null
      }
    case 'LOGIN_WITH_GOOGLE_ERROR':
      console.log('login with google error');
      return {
        ...state, 
        currentUser: 'Login with google failed'
      }
    case 'SIGNUP_SUCCESS': 
      console.log('signup success');
      return {
        ...state,
        currentUser: null
      }
    case 'SIGNUP_ERROR':
      console.log('signup error');
      return {
        ...state,
        currentUser: action.err.message
      }
    default:
      return state;
  }
} 

export default userReducer