const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR': 
      console.log('login error');
      return {
        ...state, 
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS': 
      console.log('signout success')
      return state
    case 'LOGIN_WITH_GOOGLE_SUCCESS': 
      console.log('login with google success')
      return {
        ...state,
        authError: null
      }
    case 'LOGIN_WITH_GOOGLE_ERROR':
      console.log('login with google error');
      return {
        ...state, 
        authError: 'Login with google failed'
      }
    case 'SIGNUP_SUCCESS': 
      console.log('signup success');
      return {
        ...state, 
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('signup error');
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state;
  }
} 

export default authReducer