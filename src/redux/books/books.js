// Actions
const LOAD = 'bookstore/books/LOAD_BOOK';
const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';

// Reducer
export default function booksReducer(state = [], action = {}) {
  switch (action.type) {
    // do reducer stuff
    case LOAD:
      return state;
    case ADD:
      return state.push(action.value);
    case REMOVE:
      return state.filter((m) => m.id !== action.value);
    default:
      return state;
  }
}

// Action Creators
export function loadBooks() {
  return { type: LOAD };
}

export function addBook(book) {
  return { type: ADD, value: book };
}

export function removeBook(book) {
  return { type: REMOVE, book };
}
