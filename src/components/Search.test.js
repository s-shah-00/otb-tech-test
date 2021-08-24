import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from './Search';

describe('Search component', () => {
  test('renders Search results sorted by price (default)', () => {
    const results = [
      {
        id: 1,
        title: 'a',
        price: 3,
      },
      {
        id: 2,
        title: 'b',
        price: 1,
      },
      {
        id: 3,
        title: 'c',
        price: 2,
      },
    ];
    const expected = ['1.00', '2.00', '3.00'];

    render(<Search items={results} />);

    const elements = screen.getAllByRole('button', {
      name: 'Book now',
    });

    const prices = elements.map(item => {
      const content = item.textContent;
      const index = content.indexOf('£') + 1;
      return content.substring(index);
    });
    expect(prices).toEqual(expected);
  });

  test('renders Search results sorted alphabetically', async () => {
    const searchResults = [
      {
        id: 1,
        title: 'a',
        price: 3,
      },
      {
        id: 2,
        title: 'b',
        price: 1,
      },
      {
        id: 3,
        title: 'b',
        price: 4,
      },
      {
        id: 4,
        title: 'c',
        price: 2,
      },
    ];
    const menuOptionToSelectLabelText = 'sort alphabetically';
    const expectedDisplayedTitles = ['a', 'b', 'b', 'c'];

    await testSearchResultsOrderAfterUserMenuSelection(
      searchResults,
      menuOptionToSelectLabelText,
      expectedDisplayedTitles
    );
  });

  test('renders Search results sorted by star rating', async () => {
    const searchResults = [
      {
        id: 1,
        title: 'a',
        price: 3,
        rating: 2,
      },
      {
        id: 2,
        title: 'b',
        price: 1,
        rating: 1,
      },
      {
        id: 3,
        title: 'c',
        price: 2,
        rating: 3,
      },
    ];
    const menuOptionToSelectLabelText = 'sort by star rating';
    const expectedDisplayedTitles = ['c', 'a', 'b'];

    await testSearchResultsOrderAfterUserMenuSelection(
      searchResults,
      menuOptionToSelectLabelText,
      expectedDisplayedTitles
    );
  });
});

async function testSearchResultsOrderAfterUserMenuSelection(
  searchResults,
  menuOptionToSelectLabelText,
  expectedDisplayedTitles
) {
  render(<Search items={searchResults} />);

  let elements = screen.getAllByRole('heading');
  let titles = elements.map(item => {
    return item.textContent;
  });
  expect(titles).not.toEqual(expectedDisplayedTitles);

  const radioInput = screen.getByLabelText(menuOptionToSelectLabelText);
  userEvent.click(radioInput);

  await waitFor(() => {
    elements = screen.getAllByRole('heading');
    titles = elements.map(item => {
      return item.textContent;
    });

    expect(titles).toEqual(expectedDisplayedTitles);
  });
}
