const INITIAL_STATE = {
  challenge: 1
}

const challengeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CHALLENGE':
      return state
    default:
      return state
  }
}

export default challengeReducer