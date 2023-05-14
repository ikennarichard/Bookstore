import BooksList from './BooksList';
import AddNewBook from './AddNewBook';
import styles from './Books.module.css';

export default function Books() {
  return (
    <div className={styles.container}>
      <BooksList />
      <AddNewBook />
    </div>
  );
}
