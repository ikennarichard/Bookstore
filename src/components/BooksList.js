import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Book from './Book';

export default function BooksList() {
  const books = useSelector((state) => state.books.value);
  const dispatch = useDispatch();

  return (
    <ul style={{ listStyle: 'none' }}>
      {books.map((book) => (
        <li key={book.item_id}>
          <Book
            title={book.title}
            author={book.author}
            removeBook={() => dispatch(removeBook(book.item_id))}
          />
        </li>
      ))}
    </ul>
  );
}
