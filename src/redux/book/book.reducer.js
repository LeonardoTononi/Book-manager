const INITAL_STATE = {
  books: []
}

const bookReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      console.log('added book', action.book);
      return state;
    case 'ADD_BOOK_ERROR':
      console.log('add book error');
      return state;
    case 'DELETE_BOOK':
      console.log('book deleted', action.book)
      return state;
    case 'DELETE_BOOK_ERROR':
      console.log('book deleted error')
      return state;
    default:
      return state;
  }
} 

export default bookReducer