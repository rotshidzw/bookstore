/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { id, name, author } = props;
  const dispatch = useDispatch();
  const performRemove = () => {
    dispatch(removeBook(id));
  };
  return (

    <div className="book-info">
      <h2 className="book-title">{name}</h2>
      <h6 className="book-author">{author}</h6>
      <div className="action-buttons">
        <button onClick={performRemove} className="button-outline" type="button">
          Remove
        </button>
      </div>
    </div>
  );
};
export default Book;
