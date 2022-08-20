import { v4 as rid } from 'uuid';
// Actions
const loading = 'bookstore/books/loading_BOOK';
const adding = 'bookstore/books/adding_BOOK';
const removed = 'bookstore/books/removed_BOOK';

const books = [
  { id: 1, name: 'the hunger game', author: 'suzanne collins' },
  { id: 2, name: 'Dune', author: ' Frank Herbert' },
  { id: 3, name: 'capital in the twenty-first century', author: ' Suzanne Collins' }];
// Reducer
export default function booksReducer(state = books, action = {}) {
  function remove(sourceList, value) {
    const index = sourceList.indexOf(value);
    if (index >= 0 && index < sourceList.length) {
      return [
        ...sourceList.slice(0, index),
        ...sourceList.slice(index + 1),
      ];
    }
    return sourceList;
  }
  const { value } = action;
  switch (action.type) {
    case loading:
      return [...state];
    case adding:
      return [...state, value];
    case removed:
      return remove(state, state.filter((i) => i.id === value)[0]);
    default:
      return state;
  }
}

// Action Creators
export function loadingBooks() {
  return { type: loading };
}

export function addBook(title, author) {
  return { type: adding, value: { id: rid(), name: title, author } };
}

export function removeBook(book) {
  return { type: removed, value: book };
}
