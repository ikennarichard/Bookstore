import Book from './Book';

export default function BooksList() {
  return (
    <ul style={{ listStyle: 'none' }}>
      <li><Book title="Dune" author="Frank Herbert" /></li>
      <li><Book title="Moby-Dick" author="Herman Melville" /></li>
    </ul>
  );
}
