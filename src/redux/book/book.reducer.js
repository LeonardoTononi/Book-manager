const INITAL_STATE = {
  books: [],
  added: false
};

const bookReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        payload: action.payload
      };
    case 'ADD_BOOK_ERROR':
      console.log('ADD BOOK ERROR');
      return state;
    case 'DELETE_BOOK':
      return {
        ...state,
        books: ''
      };
    case 'DELETE_BOOK_ERROR':
      console.log('BOOK DELETED ERROR');
      return state;
    default:
      return state;
  }
};

export default bookReducer;