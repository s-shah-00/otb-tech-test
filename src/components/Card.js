import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CardImage from './CardImage';
import CardBody from './CardBody';
import './Card.css';

export default function Card(props) {
  const [isReadMore, setIsReadMore] = useState(false);

  function handleReadMoreClick() {
    setIsReadMore(!isReadMore);
  }

  return (
    <div className="card">
      <div className="card__main">
        <CardImage
          title={props.title}
          imgSrc={props.imgSrc}
          onReadMoreClick={handleReadMoreClick}
          isReadMore={isReadMore}
        />
        <CardBody {...props} />
      </div>
      {isReadMore && (
        <section className="card__description">
          <h2 className="card__description-title">Overview</h2>
          <p>{props.overview}</p>
        </section>
      )}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  rating: PropTypes.number,
  party: PropTypes.object,
  timeDetails: PropTypes.object,
  departureLocation: PropTypes.string,
  price: PropTypes.number,
  overview: PropTypes.string,
  imgSrc: PropTypes.string,
};
