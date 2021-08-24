import React from 'react';
import { render, screen } from '@testing-library/react';

import SearchResults from './SearchResults';

describe('SearchResults component', () => {
  test('renders 1 Search item when there is 1 result item', () => {
    const results = [
      {
        id: 1,
        title: 'a',
      },
    ];

    render(<SearchResults items={results} />);

    const titleElements = screen.getAllByRole('heading');
    expect(titleElements).toHaveLength(1);

    const titleText = titleElements[0].textContent;
    expect(titleText).toBe(results[0].title);
  });

  test('renders 3 Search items when there are 3 result items', () => {
    const results = [
      {
        id: 1,
        title: 'a',
      },
      {
        id: 2,
        title: 'b',
      },
      {
        id: 3,
        title: 'c',
      },
    ];

    render(<SearchResults items={results} />);

    const titleElements = screen.getAllByRole('heading');
    expect(titleElements).toHaveLength(3);

    const titles = titleElements.map(item => item.textContent);
    expect(titles).toEqual(['a', 'b', 'c']);
  });
});
