import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SortMenu from './SortMenu';

describe('SortMenu component', () => {
  test('renders sort by alphabetically, price and star rating options', () => {
    const expectedOptionsText = [
      'sort alphabetically',
      'sort by price',
      'sort by star rating',
    ];
    render(<SortMenu onSortChange={() => {}} />);

    const elements = screen.getAllByRole('listitem');
    expect(elements).toHaveLength(3);

    const titles = elements.map(item => item.textContent);

    expect(titles).toEqual(expectedOptionsText);
  });

  test('sort by price selected by default', () => {
    const expectedText = 'sort by price';

    render(<SortMenu onSortChange={() => {}} />);

    const checkedElements = screen.getAllByRole('radio', {
      checked: true,
    });
    const priceInput = screen.getByLabelText(expectedText);

    expect(checkedElements).toHaveLength(1);
    expect(checkedElements[0]).toEqual(priceInput);
  });

  test('sort by alphabetically selected', () => {
    const expectedMenOptionLabelText = 'sort alphabetically';

    testSelectedMenuOptionAfterUserSelection(expectedMenOptionLabelText);
  });

  test('sort by star rating selected', () => {
    const expectedMenOptionLabelText = 'sort by star rating';

    testSelectedMenuOptionAfterUserSelection(expectedMenOptionLabelText);
  });
});

function testSelectedMenuOptionAfterUserSelection(expectedMenOptionLabelText) {
  render(<SortMenu onSortChange={() => {}} />);

  let checkedElements = screen.getAllByRole('radio', {
    checked: true,
  });
  const inputElement = screen.getByLabelText(expectedMenOptionLabelText);

  expect(checkedElements).toHaveLength(1);
  expect(checkedElements[0]).not.toEqual(inputElement);

  userEvent.click(inputElement);

  checkedElements = screen.getAllByRole('radio', {
    checked: true,
  });

  expect(checkedElements).toHaveLength(1);
  expect(checkedElements[0]).toEqual(inputElement);
}
