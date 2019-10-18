const INITIAL_STATE = {
  number: 0,
  hiddenInput: false
}

const challengeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CHALLENGE':
      return {
        ...state,
        hiddenInput: !false,
        number: action.payload
      }
    case 'SET_CHALLENGE_ERROR':
      console.log('SET CHALLENGE ERROR')
      return state;
    case 'EDIT_CHALLENGE':
      return {
        ...state,
        hiddenInput: !false,
        number: action.payload
      }
    case 'EDIT_CHALLENGE_ERROR':
      console.log('EDIT CHALLENGE ERROR')
      return state;
    default:
      return state
  }
}

export default challengeReducer