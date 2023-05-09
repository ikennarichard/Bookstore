import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

export default function AddNewBook() {
  const [values, setValue] = useState({});
  const books = useSelector((state) => state.books.value);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    setValue((values) => ({
      ...values, item_id: `item${books.length + 1}`, [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addBook(values));
    setValue({});
  }

  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input
          value={values.title || ''}
          type="text"
          name="title"
          placeholder="Book title"
          onChange={handleChange}
        />

        <input
          value={values.author || ''}
          type="text"
          name="author"
          placeholder="author"
          onChange={handleChange}
        />

        <button type="submit" onClick={handleSubmit}>Add Book</button>
      </form>
    </section>
  );
}
