import React, { Fragment } from 'react';

const AppCredit = () => (
  <Fragment>
    <span
      style={{
        color: 'white',
        backgroundColor: 'black',
        padding: '0 10px',
        display: 'inline-block',
        marginRight: 5
      }}
    >
      Made with{' '}
      <span role="img" aria-label="Coffee emoji">
        ☕️
      </span>
      {' by '}
      <a
        title="Twitter account of @vinimdocarmo"
        href="https://twitter.com/vinimdocarmo"
        target="_blank"
        rel="noopener noreferrer"
      >
        @vinimdocarmo
      </a>
    </span>
    <a
      style={{
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        padding: '0 10px',
        display: 'inline-block'
      }}
      href="https://unsplash.com/@sourfraser?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
      target="_blank"
      rel="noopener noreferrer"
      title="Download free do whatever you want high-resolution photos from Fraser Cottrell"
    >
      <span role="img" aria-label="Coffee emoji">
        📷
      </span>
      <span> Fraser Cottrell</span>
    </a>
  </Fragment>
);

export default AppCredit;
