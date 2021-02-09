import React, { useState, useEffect } from 'react';
import { Col, Row, ListGroup, Card, Button, Image } from 'react-bootstrap';
import Review from '../components/Review';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import Loading from '../components/Loading';

const ShowPage = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <React.Fragment>
      <Link to='/'>Back To Products</Link>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
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
      )}
    </React.Fragment>
  );
};

export default ShowPage;
