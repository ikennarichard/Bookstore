import React from 'react';
import PropTypes from 'prop-types'

export default function Book({ category, title, author }) {
  return (
    <div className="wrapper">
      <div>
        <b>{category}</b>
        <h2>{title}</h2>
        <p>{author}</p>
        <ul>
          <li>Comments</li>
          <li className="remove"><button type="button">Remove</button></li>
          <li>Edit</li>
        </ul>
      </div>
    </div>
  );
}

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
