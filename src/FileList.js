import React from 'react';

import Tiles from 'grommet/components/Tiles';

const FileList = (props) => (
  <Tiles fill={true} direction={'column'} flush={false} size={'small'} pad={'none'}>
    {props.children}
  </Tiles>
);

export default FileList;
