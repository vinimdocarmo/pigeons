import React from 'react';
import Box from 'grommet/components/Box';

const BoxHoC = Component => {
  return props => (
    <Box full={'vertical'} justify={'center'} direction={'column'} align={'center'} pad={'small'}>
      <Component {...props} />
    </Box>
  );
};

export default BoxHoC;
