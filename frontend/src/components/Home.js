import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loading from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Paginate from './Paginate';
import ProductCarousel from './ProductCarousel';
import Meta from './Meta';
import { Link } from 'react-router-dom';

const Home = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <div>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <React.Fragment>
          <Row>
            {products.map((item) => {
              return (
                <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                  <Product item={item} />
                </Col>
              );
            })}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default Home;
