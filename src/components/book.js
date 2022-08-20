/* eslint-disable react/prop-types */
const Book = (props) => {
  const { name, author } = props;

  return (

    <div className="bookInfo">
      <h2 className="title-Book">{name}</h2>
      <h6 className="authors">{author}</h6>
      <div className="click-button">
        <button className="button-outline" type="button">
          Remove
        </button>
      </div>
    </div>
  );
};
export default Book;
