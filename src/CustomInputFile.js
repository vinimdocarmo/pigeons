import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Add from 'grommet/components/icons/base/Add';
import Pulse from 'grommet/components/icons/Pulse';
import Box from 'grommet/components/Box';

class CustomInputFile extends Component {
  constructor(props) {
    super(props);
    this.fileRef = React.createRef();
  }

  static propTypes = {
    onChange: PropTypes.func
  };

  onChange = () => {
    this.props.onChange([...this.fileRef.current.files]);
  }

  onClick = () => {
    this.fileRef.current.click();
  }

  render() {
    return (
      <Box direction={'row'} align={'center'} responsive={false}>
        <Pulse icon={<Add />} onClick={this.onClick} />
        <span style={{ marginLeft: 10 }}>Add your files</span>
        <input ref={this.fileRef} onChange={this.onChange} multiple="true" type="file" style={{ display: 'none' }} />
      </Box>
    );
  }
}

export default CustomInputFile;
