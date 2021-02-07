import React from 'react';
import { Card } from 'react-bootstrap';
import Review from './Review';

const Product = ({ item }) => {
  return (
    <Card className='my-3 p-3'>
      <a href={`/product/${item._id}`}>
        <Card.Img src={item.image} variant='top'></Card.Img>
      </a>

      <Card.Body>
        <a href={`/product/${item._id}`}>
          <Card.Title>{item.name}</Card.Title>
        </a>
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
