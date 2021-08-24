import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Card from './Card';

describe('Card component', () => {
  describe('image', () => {
    test('renders result image', () => {
      const resultTitle = 'Iberostar Grand Salome';
      const expectedAltText = `Image for ${resultTitle}`;

      render(<Card title={resultTitle} />);

      const imgElement = screen.getByAltText(expectedAltText);
      expect(imgElement).toBeInTheDocument();
    });
  });

  describe('body', () => {
    test('renders title', () => {
      const resultTitle = 'Iberostar Grand Salome';

      render(<Card title={resultTitle} />);

      const titleElement = screen.getByRole('heading');
      const titleText = titleElement.textContent;
      expect(titleText).toBe(resultTitle);
    });

    test('renders location', () => {
      const resultLocation = 'Costa Adeje, Tenerife';

      render(<Card location={resultLocation} />);

      const locationElement = screen.getByText(resultLocation);
      expect(locationElement).toBeInTheDocument();
    });

    describe('star rating', () => {
      function testNumberOfStarRatings(rating) {
        render(<Card rating={rating} />);

        const starsElement = screen.getByRole('img', {
          name: `${rating} of 5 stars rating`,
        });
        expect(starsElement).toBeInTheDocument();
      }

      test('renders no stars', () => {
        const rating = 0;

        testNumberOfStarRatings(rating);
      });

      test('renders 1 star', () => {
        const rating = 1;

        testNumberOfStarRatings(rating);
      });

      test('renders 5 stars', () => {
        const rating = 5;

        testNumberOfStarRatings(rating);
      });
    });

    describe('party details', () => {
      function testDisplayedPartyDetails(partyInfo, expectedText) {
        render(<Card party={partyInfo} />);

        const partyElement = screen.getByText(
          (_, node) => node.textContent === expectedText
        );

        expect(partyElement).toBeInTheDocument();
      }

      test('renders for 1 adult', () => {
        const partyInfo = {
          adults: 1,
          children: 0,
          infants: 0,
        };
        const expectedText = '1 Adult';

        testDisplayedPartyDetails(partyInfo, expectedText);
      });

      test('renders for 2 adults', () => {
        const partyInfo = {
          adults: 2,
        };
        const expectedText = '2 Adults';

        testDisplayedPartyDetails(partyInfo, expectedText);
      });

      test('renders for 1 child', () => {
        const partyInfo = {
          children: 1,
        };
        const expectedText = '1 child';

        testDisplayedPartyDetails(partyInfo, expectedText);
      });

      test('renders for 2 Adults and 1 child', () => {
        const partyInfo = {
          adults: 2,
          children: 1,
        };
        const expectedText = '2 Adults, 1 child';

        testDisplayedPartyDetails(partyInfo, expectedText);
      });

      test('renders for 2 Adults and 2 children', () => {
        const partyInfo = {
          adults: 2,
          children: 2,
        };
        const expectedText = '2 Adults, 2 children';

        testDisplayedPartyDetails(partyInfo, expectedText);
      });

      test('renders for 2 Adults and 1 infant', () => {
        const partyInfo = {
          adults: 2,
          children: 1,
          infants: 1,
        };
        const expectedText = '2 Adults, 1 child & 1 infant';

        testDisplayedPartyDetails(partyInfo, expectedText);
      });

      test('renders for 2 infants', () => {
        const partyInfo = {
          adults: 2,
          infants: 2,
        };
        const expectedText = '2 Adults & 2 infants';

        testDisplayedPartyDetails(partyInfo, expectedText);
      });
    });

    describe('time details', () => {
      function testDisplayedTimeDetails(timeDetails, expectedText) {
        render(<Card timeDetails={timeDetails} />);

        const timeElement = screen.getByText(
          (_, node) => node.textContent === expectedText
        );

        expect(timeElement).toBeInTheDocument();
      }

      test('renders formatted date and 1 day', () => {
        const timeDetails = {
          startDate: new Date('2019-07-03'),
          days: 1,
        };
        const expectedText = `3rd July 2019 for 1 day`;

        testDisplayedTimeDetails(timeDetails, expectedText);
      });

      test('renders formatted date and 5 days', () => {
        const timeDetails = {
          startDate: new Date('2019-07-03'),
          days: 5,
        };
        const expectedText = `3rd July 2019 for 5 days`;

        testDisplayedTimeDetails(timeDetails, expectedText);
      });
    });

    test('renders departure details', () => {
      const departure = 'East Midlands';
      const expectedText = 'departing from ' + departure;

      render(<Card departureLocation={departure} />);

      const departureElement = screen.getByText(
        (_, node) => node.textContent === expectedText
      );

      expect(departureElement).toBeInTheDocument();
    });

    test('renders book now button with price', () => {
      const price = 1136.5;
      const expectedText = 'Book now';
      const expectedPrice = '£1,136.50';

      render(<Card price={price} />);

      const buttonElement = screen.getByRole('button', {
        name: 'Book now',
      });
      expect(buttonElement).toBeInTheDocument();

      const buttonText = buttonElement.textContent;
      expect(buttonText).toEqual(expect.stringContaining(expectedText));
      expect(buttonText).toEqual(expect.stringContaining(expectedPrice));
    });

    describe('more information', () => {
      test('renders Read more about this hotel link', () => {
        const expectedText = 'Read more about this hotel';
        const overviewDescText = 'hotel description';

        render(<Card overview={overviewDescText} />);

        const readMoreLinkElement = screen.getByRole('button', {
          name: 'Read more',
        });
        const readMoreText = readMoreLinkElement.textContent;
        const overviewHeader = screen.queryByText('Overview');
        const overviewDescription = screen.queryByText(overviewDescText);

        expect(readMoreText).toEqual(expectedText);
        expect(overviewHeader).toBeNull();
        expect(overviewDescription).toBeNull();
      });

      test('after Read more clicked, shows Read less about this hotel link and Overview', async () => {
        const expectedText = 'Read less about this hotel';
        const overviewDescText = 'hotel description';

        render(<Card overview={overviewDescText} />);

        let readMoreLinkElement = screen.getByRole('button', {
          name: 'Read more',
        });

        userEvent.click(readMoreLinkElement);

        readMoreLinkElement = await screen.findByRole('button', {
          name: 'Read less',
        });
        const readMoreText = readMoreLinkElement.textContent;
        const overviewHeader = screen.getByText('Overview');
        const overviewDescription = screen.getByText(overviewDescText);

        expect(readMoreText).toEqual(expectedText);
        expect(overviewHeader).toBeInTheDocument();
        expect(overviewDescription).toBeInTheDocument();
      });

      test('after Read less clicked, shows Read more about this hotel link and Overview', async () => {
        const expectedText = 'Read more about this hotel';
        const overviewDescText = 'hotel description';

        render(<Card overview={overviewDescText} />);

        let readMoreLinkElement = screen.getByRole('button', {
          name: 'Read more',
        });

        userEvent.click(readMoreLinkElement);

        readMoreLinkElement = await screen.findByRole('button', {
          name: 'Read less',
        });

        userEvent.click(readMoreLinkElement);

        readMoreLinkElement = await screen.findByRole('button', {
          name: 'Read more',
        });

        const readMoreText = readMoreLinkElement.textContent;
        const overviewHeader = screen.queryByText('Overview');
        const overviewDescription = screen.queryByText(overviewDescText);

        expect(readMoreText).toEqual(expectedText);
        expect(overviewHeader).toBeNull();
        expect(overviewDescription).toBeNull();
      });
    });
  });
});
