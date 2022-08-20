import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import AddBook from './AddBook';
import Book from './book';

function Books() {
  const Books = useSelector((state) => state.books, shallowEqual);
  return (
    <>
      {Books.map((m) => <Book key={m.id} id={m.id} name={m.name} author={m.author} />)}
      <AddBook />
    </>

  );
}

export default Books;
