import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SortMenu from './SortMenu';
import SearchResults from './SearchResults';
import './Search.css';

export default function Search(props) {
  const items = sortItems(props.items, 'price');
  const [searchItems, setSearchItems] = useState(items);

  function handleSortChange(event) {
    const items = [...searchItems];
    const sortedItems = sortItems(items, event.target.value);
    setSearchItems(sortedItems);
  }

  return (
    <div className="search-container search-container__background">
      <SortMenu onSortChange={handleSortChange} />
      <SearchResults items={searchItems} />
    </div>
  );
}

Search.propTypes = {
  items: PropTypes.array,
};

function sortItems(items, sortType) {
  switch (sortType) {
    case 'alphabetically':
      items.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      break;
    case 'price':
      items.sort((a, b) => a.price - b.price);
      break;
    case 'rating':
      items.sort((a, b) => b.rating - a.rating);
      break;
  }
  return items;
}
