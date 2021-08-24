import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export default function Button(props) {
  return (
    <button className={`btn ${props.className}`} aria-label={props.label}>
      {props.content}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  content: PropTypes.element,
  className: PropTypes.string,
};
