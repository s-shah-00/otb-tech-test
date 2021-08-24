import hotelImg1 from './assets/hotel-image-1.png';
import hotelImg2 from './assets/hotel-image-2.png';
import hotelImg3 from './assets/hotel-image-3.png';

const SearchData = [
  {
    id: 1,
    title: 'Iberostar Grand Salome',
    imgSrc: hotelImg1,
    location: 'Costa Adeje, Tenerife',
    rating: 5,
    party: {
      adults: 2,
      children: 2,
      infants: 1,
    },
    timeDetails: {
      startDate: new Date('2019-07-03'),
      days: 7,
    },
    departureLocation: 'East Midlands',
    price: 1136.5,
    overview:
      'The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.',
  },
  {
    id: 2,
    title: 'Aguamarina Golf Hotel',
    imgSrc: hotelImg2,
    location: 'Costa Adeje, Tenerife',
    rating: 4,
    party: {
      adults: 2,
      children: 1,
    },
    timeDetails: {
      startDate: new Date('2019-05-27'),
      days: 7,
    },
    departureLocation: 'Liverpool',
    price: 696.8,
    overview:
      'Phasellus ornare finibus malesuada. Integer elit orci, tempus non purus et, dictum sollicitudin nunc. Donec vulputate gravida nisi eget tempus.',
  },
  {
    id: 3,
    title: 'Las Piramides Resort',
    imgSrc: hotelImg3,
    location: 'Costa Adeje, Tenerife',
    rating: 3,
    party: {
      adults: 2,
      children: 2,
    },
    timeDetails: {
      startDate: new Date('2019-07-03'),
      days: 7,
    },
    departureLocation: 'Manchester',
    price: 499.99,
    overview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia ullamcorper ornare. In aliquam lacinia metus, vitae rhoncus justo scelerisque at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
  },
];

export default SearchData;
