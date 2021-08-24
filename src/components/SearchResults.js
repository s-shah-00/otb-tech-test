import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import './SearchResults.css';

export default function SearchResults(props) {
  return (
    <div className="search-results">
      <ul className="search-results__list">
        {props.items.map(item => (
          <li key={item.id}>
            <Card {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

SearchResults.propTypes = {
  items: PropTypes.array,
};
