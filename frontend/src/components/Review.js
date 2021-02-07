import React from 'react';
import PropTypes from 'prop-types';

const Review = ({ rating, numReviews }) => {
  return (
    <div className='rating'>
      <i
        className={
          rating >= 1
            ? 'fas fa-star'
            : rating >= 0.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
      ></i>
      <i
        className={
          rating >= 2
            ? 'fas fa-star'
            : rating >= 1.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
      ></i>
      <i
        className={
          rating >= 3
            ? 'fas fa-star'
            : rating >= 2.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
      ></i>
      <i
        className={
          rating >= 4
            ? 'fas fa-star'
            : rating >= 3.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
      ></i>
      <i
        className={
          rating >= 5
            ? 'fas fa-star'
            : rating >= 4.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
      ></i>
      <p>{numReviews ? numReviews : null}</p>
    </div>
  );
};

Review.propTypes = {
  rating: PropTypes.number.isRequired,
  numReviews: PropTypes.string.isRequired,
};

export default Review;
