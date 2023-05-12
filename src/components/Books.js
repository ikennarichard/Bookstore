import BooksList from './BooksList';
import AddNewBook from './AddNewBook';

export default function Books() {
  return (
    <div style={
      {
        backgroundColor: '#fafafa',
        padding: '1.5em 3em',
        paddingBottom: '3em',
      }
    }
    >
      <BooksList />
      <AddNewBook />
    </div>
  );
}
