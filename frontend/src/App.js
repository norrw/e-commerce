import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Head from './components/Head';
import Home from './components/Home';
import ShowPage from './components/ShowPage';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import PlaceOrder from './components/PlaceOrder';
import Order from './components/Order';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Head />
        <main className='py-4'>
          <Container>
            <Route path='/order/:id' component={Order} />
            <Route path='/placeOrder' component={PlaceOrder} />
            <Route path='/payment' component={Payment} />
            <Route path='/shipping' component={Shipping} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/profile' component={Profile} />
            <Route path='/product/:id' component={ShowPage} />
            <Route path='/cart/:id?' component={Cart} />
            <Route path='/' component={Home} exact />
          </Container>
        </main>
      </Fragment>
    </Router>
  );
};

export default App;
