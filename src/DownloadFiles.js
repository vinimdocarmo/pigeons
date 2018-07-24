import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';

export default class DownloadFiles extends Component {
  static propTypes = {
    files: PropTypes.array
  };

  render() {
    return (
        <Box full={'vertical'} justify={'center'} align={'center'}>
            {this.props.files.map(file => <div>{file.name}</div>)}
        </Box>
    );
  }
}
