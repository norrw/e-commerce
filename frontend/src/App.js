import { Fragment } from 'react';
import Head from './components/Head';
import { Container } from 'react-bootstrap';
const App = () => {
  return (
    <Fragment>
      <Head />
      <main className='py-4'>
        <Container>
          <h1>Will's Shop</h1>
        </Container>
      </main>
    </Fragment>
  );
};

export default App;
