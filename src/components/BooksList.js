import { useSelector } from 'react-redux';
import Book from './Book';

export default function BooksList() {
  const books = useSelector((state) => state.books.value);
  return (
    <ul style={{ listStyle: 'none' }}>
      {books.map((book) => (
        <li key={book.id}>
          <Book
            title={book.title}
            author={book.author}
          />
        </li>
      ))}
    </ul>
  );
}
