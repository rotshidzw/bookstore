import React from 'react';
import AddBook from './AddBook';
import Book from './book';

class Books extends React.Component {
  constructor() {
    super();
    this.state = {
      Books: [
        { id: 1, name: 'the hunger game', author: 'suzanne collins' },
        { id: 2, name: 'Dune', author: ' Frank Herbert' },
        { id: 3, name: 'capital in the twenty-first century', author: ' Suzanne Collins' }],
    };
  }

  render() {
    const { Books } = this.state;
    return (
      <>
        {Books.map((m) => <Book key={m.id} name={m.name} author={m.author} />)}
        <AddBook />
      </>

    );
  }
}

export default Books;
