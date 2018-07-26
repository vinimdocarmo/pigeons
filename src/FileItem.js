import React from 'react';
import Tile from 'grommet/components/Tile';
import Close from 'grommet/components/icons/base/Close';
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
      <Close onClick={() => props.removeFile(props.file)} style={{ cursor: 'pointer' }} />
    </div>
  </Tile>
);

FileItem.propTypes = {
  file: PropTypes.instanceOf(File)
};

export default FileItem;
