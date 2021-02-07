import { Fragment } from 'react';
import Head from './components/Head';
import Home from './components/Home';
import { Container } from 'react-bootstrap';
const App = () => {
  return (
    <Fragment>
      <Head />
      <main className='py-4'>
        <Container>
          <Home />
        </Container>
      </main>
    </Fragment>
  );
};

export default App;
