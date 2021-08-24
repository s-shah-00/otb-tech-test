import React from 'react';
import PropTypes from 'prop-types';

import SortMenuItem from './SortMenuItem';
import './SortMenu.css';

export default function SortMenu(props) {
  const items = [
    {
      defaultChecked: false,
      title: (
        <span>
          sort <strong>alphabetically</strong>
        </span>
      ),
      value: 'alphabetically',
    },
    {
      defaultChecked: true,
      title: (
        <span>
          sort by <strong>price</strong>
        </span>
      ),
      value: 'price',
    },
    {
      defaultChecked: false,
      title: (
        <span>
          sort by <strong>star rating</strong>
        </span>
      ),
      value: 'rating',
    },
  ];

  return (
    <div className="sort-menu">
      <ul
        className="sort-menu__list"
        role="radiogroup"
        onChange={props.onSortChange}
      >
        {items.map((item, index) => (
          <SortMenuItem
            key={`sortMenu${index}`}
            title={item.title}
            value={item.value}
            defaultChecked={item.defaultChecked}
            last={index === items.length - 1}
          />
        ))}
      </ul>
    </div>
  );
}

SortMenu.propTypes = {
  onSortChange: PropTypes.func,
};
