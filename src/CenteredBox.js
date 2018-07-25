import React from 'react';
import Box from 'grommet/components/Box';

const CenteredBox = ({ children }) => (
    <Box full={'vertical'} justify={'center'} direction={'column'} align={'center'} pad={'small'}>
      {children}
    </Box>
);

export default CenteredBox;