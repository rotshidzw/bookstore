import { useDispatch } from 'react-redux';
import { addBook as add } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const performSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const author = e.target[1].value;
    dispatch(add(title, author));
  };
  return (
    <section>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-form" onSubmit={performSubmit}>
        <input onChange={() => {}} className="input title-input" placeholder="Book title" required="" />
        <input onChange={() => {}} className="input author-input" placeholder="Book Author" required="" />
        <button className="primary-button-big" type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default AddBook;
