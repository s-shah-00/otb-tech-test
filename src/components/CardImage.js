import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function CardImage(props) {
  return (
    <div className="card__image">
      <img
        className="image__fluid"
        alt={`Image for ${props.title}`}
        src={props.imgSrc}
      />
      <button
        className="image__overlay card__read-more u-text--small"
        aria-label={props.isReadMore ? 'Read less' : 'Read more'}
        onClick={props.onReadMoreClick}
      >
        {props.isReadMore ? (
          <>
            <strong>Read less</strong> about this hotel
            <FontAwesomeIcon
              className="card__read-more-icon"
              icon={faAngleDown}
            />
          </>
        ) : (
          <>
            <strong>Read more</strong> about this hotel
            <FontAwesomeIcon
              className="card__read-more-icon"
              icon={faAngleRight}
            />
          </>
        )}
      </button>
    </div>
  );
}

CardImage.propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  isReadMore: PropTypes.bool,
  onReadMoreClick: PropTypes.func,
};
