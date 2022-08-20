import { createAsyncThunk } from '@reduxjs/toolkit';
import url from '../../api/connects';

// Actions
const START = 'bookstore/books/START_LOADING_BOOK';
const LOAD = 'bookstore/books/LOAD_BOOK';
const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';
const FAIL = 'bookstore/books/LOADING_FAILED_BOOK';

const initialState = {
  items: [],
  loading: false,
  error: null,
};
// Reducer
export default function booksReducer(state = initialState, action = {}) {
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
  const { payload } = action;

  switch (action.type) {
    case 'bookstore/books/LOAD_BOOK/pending':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'bookstore/books/LOAD_BOOK/fulfilled':
      return {
        ...state,
        loading: false,
        error: payload.value.error,
        items: payload.value,
      };
    case 'bookstore/books/ADD_BOOK/fulfilled':
      return {
        ...state,
        loading: false,
        error: payload.value.error,
        items: [...state.items, payload.value],
      };

    case 'bookstore/books/REMOVE_BOOK/fulfilled':
      return {
        ...state,
        loading: false,
        error: payload.value.error,
        items: remove(state.items, state.items.filter((i) => i.id === payload.value)[0]),
      };

    case FAIL:
      return {
        ...state,
        loading: false,
        error: payload.value.error,
        items: [],
      };
    default:
      return state;
  }
}

// Action Creators

export function loadBooksFailed(result) {
  return { type: START, value: result };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
export const loadBooks = createAsyncThunk(LOAD, async () => fetch(`${url}/books`)
  .then(handleErrors)
  .then((res) => res.json())
  .then((json) => {
    const books = [];
    Object.entries(json).forEach((key) => {
      const iid = key[0];
      const { title, author } = key[1][0];
      const book = { id: iid, name: title, author };
      books.push(book);
    });
    return { value: books };
  })
  .catch((error) => error));

export const addBook = createAsyncThunk(ADD, async (book) => fetch(`${url}/books`, {
  method: 'POST',
  body: JSON.stringify({
    item_id: `${book.id}`,
    title: `${book.name}`,
    author: `${book.author}`,
    category: `${book.category}`,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then(() => ({ value: book })));

export const removeBook = createAsyncThunk(REMOVE, (id) => fetch(`${url}/books/${id}`, {
  method: 'DELETE',
  body: '',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then(() => ({ value: id })));
