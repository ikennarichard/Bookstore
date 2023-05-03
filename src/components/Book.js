import React from 'react';
import PropTypes from 'prop-types'

export default function Book({ category }) {
  return (
    <div className="wrapper">
      <div>
        <b>{category}</b>
      </div>
    </div>
  );
}

Book.propTypes = {
  category: PropTypes.string.isRequired,
};