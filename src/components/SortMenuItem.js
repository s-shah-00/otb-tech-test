import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSortAlphaDown,
  faPoundSign,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

import './SortMenuItem.css';

export default function SortMenuItem(props) {
  const inputId = `sortOption${props.value}`;
  const separatorClass = props.last ? '' : 'sort-item__separator';

  return (
    <li className="sort-item">
      <label className="sort-item__label" htmlFor={inputId}>
        <input
          className="sort-item__radio"
          type="radio"
          name="sortOption"
          id={inputId}
          value={props.value}
          defaultChecked={props.defaultChecked}
        />
        <span className={`sort-item__title ${separatorClass}`}>
          {props.title}
        </span>
        <span className={`sort-item__icon ${separatorClass}`}>
          <FontAwesomeIcon icon={getIcon(props.value)} />
        </span>
      </label>
    </li>
  );
}

SortMenuItem.propTypes = {
  title: PropTypes.element,
  value: PropTypes.string,
  defaultChecked: PropTypes.bool,
  last: PropTypes.bool,
};

function getIcon(itemValue) {
  let iconDef;
  if (itemValue === 'alphabetically') {
    iconDef = faSortAlphaDown;
  }
  if (itemValue === 'price') {
    iconDef = faPoundSign;
  }
  if (itemValue === 'rating') {
    iconDef = faStar;
  }

  return iconDef;
}
