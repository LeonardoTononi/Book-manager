import { addBookToLibrary, deleteBookFromLibrary } from './book.utils';

const INITAL_STATE = {
  books: [],
  added: false
};

const bookReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: addBookToLibrary(state.books, action.payload)
      };
    case 'ADD_BOOK_ERROR':
      console.log('ADD BOOK ERROR');
      return state;
    case 'DELETE_BOOK':
      return {
        ...state,
        books: deleteBookFromLibrary(state.books, action.payload)
      };
    case 'DELETE_BOOK_ERROR':
      console.log('BOOK DELETED ERROR');
      return state;
    default:
      return state;
  }
};

export default bookReducer;
