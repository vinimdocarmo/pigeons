import React from 'react';
import Tile from 'grommet/components/Tile';
import PropTypes from 'prop-types';

const FileItem = props => (
  <Tile wide={true} direction={'row'} justify={'between'} responsive={false}>
    <div>
      <div>{props.file.name}</div>
      <div style={{ fontSize: 12 }}>
        {props.file.size} | {props.file.type}
      </div>
    </div>
    <div>
      {props.icon}
    </div>
  </Tile>
);

FileItem.propTypes = {
  file: PropTypes.shape({ 
    name: PropTypes.string, 
    size: PropTypes.string, 
    type: PropTypes.string 
  })
};

export default FileItem;
