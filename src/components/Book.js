import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ title, author }) {
  return (
    <div className="wrapper">
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
        <button type="button">Remove</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
