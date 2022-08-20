const AddBook = () => (
  <section>
    <h2 className="book-title">ADD NEW BOOK</h2>
    <form className="addFORM">
      <input className="input title-input" placeholder="Book title" required="" value="" />
      <input className="input author-input" placeholder="Book Author" required="" value="" />
      <button className="primary-button-big" type="submit">ADD BOOK</button>
    </form>
  </section>
);

export default AddBook;
