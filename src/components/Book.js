import PropTypes from 'prop-types';

export default function Book({ title, author, removeBook }) {
  return (
    <div className="wrapper">
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
        <button type="button" onClick={removeBook}>Remove</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};
