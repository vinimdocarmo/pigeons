import React from 'react';

import Box from 'grommet/components/Box';

const NotFound = () => (
  <Box full={'vertical'} justify={'center'} align={'center'}>
    <Box colorIndex={'neutral-1-a'} pad={'medium'} justify={'center'} align={'center'}>
      <h1>404 NOT FOUND</h1>
      <a href="/">Go to the homepage</a>
    </Box>
  </Box>
);

export default NotFound;
