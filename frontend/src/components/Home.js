import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';

const Home = () => {
  return (
    <div>
      <Row>
        {products.map((item) => {
          return (
            <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
              <Product item={item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;
