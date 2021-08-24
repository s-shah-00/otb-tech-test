import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import formattedDateForDisplay from '../utility/dateHelper';

import Button from './Button';

export default function CardBody(props) {
  return (
    <section className="card__body">
      <h2 className="card__title">{props.title}</h2>
      <p className="card__subtitle">{props.location}</p>
      <div role="img" aria-label={`${props.rating} of 5 stars rating`}>
        {[...Array(props.rating)].map((_, index) => (
          <FontAwesomeIcon
            className="card__rating-icon"
            key={`ratingIcon${index}`}
            icon={faStar}
          />
        ))}
      </div>
      <p className="card__copy u-text--small">{getPartyText(props.party)}</p>
      <p className="card__copy u-text--small">
        {getTimeText(props.timeDetails)}
      </p>
      <p className="card__copy u-text--small">
        departing from <strong>{props.departureLocation}</strong>
      </p>
      <Button
        className="btn--yellow u-width-100"
        label="Book now"
        content={
          <>
            <div className="u-text--small">
              <strong>Book now</strong>
            </div>
            <div className="u-text--large">
              <strong>
                {props.price.toLocaleString('en-GB', {
                  style: 'currency',
                  currency: 'GBP',
                })}
              </strong>
            </div>
          </>
        }
      />
    </section>
  );
}

CardBody.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  rating: PropTypes.number,
  party: PropTypes.object,
  timeDetails: PropTypes.object,
  departureLocation: PropTypes.string,
  price: PropTypes.number,
};

CardBody.defaultProps = {
  price: 0,
};

function getPartyText(party) {
  let fragments = [];
  if (!party) {
    return <></>;
  }

  if (party.adults) {
    fragments.push(<strong>{party.adults}</strong>);
    fragments.push(party.adults > 1 ? ' Adults' : ' Adult');
  }
  if (party.children) {
    fragments.push(party.adults ? ', ' : '');
    fragments.push(<strong>{party.children}</strong>);
    fragments.push(party.children > 1 ? ' children' : ' child');
  }
  if (party.infants) {
    fragments.push(' & ');
    fragments.push(<strong>{party.infants}</strong>);
    fragments.push(party.infants > 1 ? ' infants' : ' infant');
  }

  return (
    <>
      {fragments.map((item, index) => (
        <React.Fragment key={`party${index}`}>{item}</React.Fragment>
      ))}
    </>
  );
}

function getTimeText(timeDetails) {
  if (!timeDetails || !timeDetails.startDate) {
    return;
  }

  const formattedDate = formattedDateForDisplay(timeDetails.startDate);
  const dayPluralValue = timeDetails.days > 1 ? 's' : '';
  return (
    <>
      <strong>{formattedDate}</strong> for{' '}
      <strong>
        {timeDetails.days} day{dayPluralValue}
      </strong>
    </>
  );
}
