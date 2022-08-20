import { useDispatch } from 'react-redux';
import { v4 as rid } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const performSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const author = e.target[1].value;
    const category = e.target[2].options[e.target[2].selectedIndex].text;
    const iid = rid();
    const book = {
      id: iid,
      name: title,
      author,
      category,
    };
    dispatch(addBook(book));
  };
  return (
    <section>
      <h2 className="FormTitle">ADD NEW BOOK</h2>
      <form className="AddForm" onSubmit={performSubmit}>
        <input onChange={() => {}} className="input title-input" placeholder="Book title" required="" />
        <input onChange={() => {}} className="input author-input" placeholder="Book Author" required="" />
        <select className="input category-input">
          <option value="cartoons">cartoon</option>
          <option value="science">Science </option>
          <option value="math">math</option>
        </select>
        <button className="primary-button-big" type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default AddBook;
