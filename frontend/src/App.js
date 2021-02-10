import { Fragment } from 'react';
import Head from './components/Head';
import Home from './components/Home';
import ShowPage from './components/ShowPage';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Head />
        <main className='py-4'>
          <Container>
            <Route path='/' component={Home} exact />
            <Route path='/product/:id' component={ShowPage} />
            <Route path='/cart/:id?' component={Cart} />
          </Container>
        </main>
      </Fragment>
    </Router>
  );
};

export default App;
