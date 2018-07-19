import React from 'react';

const AppCredit = props => (
  <span>
    <span style={{ color: 'white', backgroundColor: 'black', padding: '0 10px', display:'inline-block', marginRight: 5 }}>
      <span>Made with ☕️ by </span>
      <a
        title="Twitter account of @vinimdocarmo"
        href="https://twitter.com/vinimdocarmo"
        target="_blank"
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
    <span>📷</span>
    <span>Fraser Cottrell</span>
  </a>
  </span>
);

export default AppCredit;
