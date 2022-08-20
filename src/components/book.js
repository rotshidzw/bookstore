/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const {
    id, name, author, category,
  } = props;
  const randomPercentge = Math.floor(Math.random() * (100 - 0 + 1) + 0);
  const randomChapter = Math.floor(Math.random() * (20 - 0 + 1) + 0);
  const dispatch = useDispatch();
  const performRemove = () => {
    dispatch(removeBook(id));
  };
  return (

    <li>
      <div className="book">
        <div className="book-cont">
          <div className="book-info">
            <h4 className="book-category">{category}</h4>
            <h2 className="book-title">{name}</h2>
            <h6 className="book-author">{author}</h6>
            <div className="action-buttons">
              <button className="button-outline disabled" type="button">Comments</button>
              <div className="vertical-divider" />
              <button className="button-outline" type="button" onClick={performRemove}>Remove</button>
              <div className="vertical-divider" />
              <button className="button-outline disabled" type="button">Edit</button>
            </div>
          </div>
          <div className="prog-cont">
            <div className="circular-prog-cont">
              <div role="progressbar" aria-label="progress Bar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ '--value': randomPercentge }} />
            </div>
            <div className="progress-stat">
              <p className="perc-complete">
                {`${randomPercentge}%`}
              </p>
              <p className="completed">Completed</p>
            </div>
            <div className="prog-divider" />
            <div className="current-chapter-container">
              <div>
                <p className="current-chapter-label">CURRENT CHAPTER</p>
                <p className="current-chapter">
                  {`Chapter ${randomChapter}`}
                </p>
              </div>
              <div><button className="primary-button" type="button">UPDATE PROGRESS</button></div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default Book;
