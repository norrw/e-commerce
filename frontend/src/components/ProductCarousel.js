import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Loading from './Loading';
import Message from './Message';
import { listTopProducts } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loading></Loading>
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>
      {products.map((item) => (
        <Carousel.Item key={item._id}>
          <Link to={`/product/${item._id}`}>
            <Image src={item.image} alt={item.name} fluid></Image>
            <Carousel.Caption class='carousel-caption'>
              <h2>
                {item.name} (£{item.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
