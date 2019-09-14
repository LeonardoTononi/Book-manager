const initState = {
  books: [
        { title: 'Harry Potter and the Cursed Child', author: 'JK Rowling', note: 'I love it', id: 1 },
        { title: 'The lord of the rings', author: 'J.R.R Tolkien', note: 'The bestseller of the century!', id: 2 },
        { title: 'Minimalism', author: 'Jon Doe', note: 'Less is better', id: 3 },
      ]
}

const booksReducer = (state = initState, action) => {
  return state
} 

export default booksReducer