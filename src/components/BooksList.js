import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, getBooks } from '../redux/utils';
import Book from './Book';

export default function BooksList() {
  const { isLoading, isError, value } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const loading = isLoading && <p>Loading...</p>;
  const error = isError && <p>Error loading books, try again</p>;

  return (
    <>
      {loading}
      {error}
      <ul style={{ listStyle: 'none' }}>
        {value.map((book) => (
          <li key={book.item_id}>
            <Book
              title={book.title}
              author={book.author}
              removeBook={() => dispatch(deleteBook(book.item_id))}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
