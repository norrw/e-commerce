import React from 'react';
import { Card } from 'react-bootstrap';
import Review from './Review';
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
  return (
    <Card className='my-3 p-3'>
      <Link to={`/product/${item._id}`}>
        <Card.Img src={item.image} variant='top'></Card.Img>
      </Link>

      <Card.Body>
        <Link to={`/product/${item._id}`}>
          <Card.Title>{item.name}</Card.Title>
        </Link>
        <Card.Text>
          <Review
            rating={item.rating}
            numReviews={`${item.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text>£{item.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
