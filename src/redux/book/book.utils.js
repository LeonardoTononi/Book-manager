export const addBookToLibrary = (books, bookToAdd) => {
  const existingBooks = books.find(book => book.id === bookToAdd.id);

  if (existingBooks) return [...books];

  return [...books, { ...bookToAdd }];
};

export const deleteBookFromLibrary = (books, idBookToRemove) => {
  const filteredBooks = books.filter(book => book.id !== idBookToRemove);

  return [...filteredBooks];
};
