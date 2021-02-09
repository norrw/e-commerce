import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div>
      <Spinner
        animation='border'
        role='status'
        style={{
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
        }}
      >
        <span className='sr-only'>Page Loading</span>
      </Spinner>
    </div>
  );
};

export default Loading;
