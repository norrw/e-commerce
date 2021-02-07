import React from 'react';
import {
  Col,
  Row,
  ListGroup,
  Card,
  Button,
  Image,
  ListGroupItem,
} from 'react-bootstrap';
import Review from '../components/Review';
import products from '../products';
import { Link } from 'react-router-dom';

const ShowPage = ({ match }) => {
  const product = products.find((item) => item._id === match.params.id);
  return (
    <React.Fragment>
      <Link to='/'>Back To Products</Link>
      <Row>
        <Col md={6}>
          <Image fluid src={product.image} alt={product.name}></Image>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Review
                rating={product.rating}
                numReviews={`${product.numReviews} reviews`}
              ></Review>
            </ListGroup.Item>
            <ListGroup.Item>£{product.price}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price: </Col>
                  <Col>£{product.price} </Col>
                </Row>
                <Row>
                  <Col>Stock: </Col>
                  <Col>
                    {product.countInStock > 0
                      ? 'In Stock'
                      : 'Currently Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className='text-center'>
                <Button disabled={product.countInStock === 0}>
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ShowPage;
