import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CenteredBox from './CenteredBox';

export default class DownloadFiles extends Component {
  static propTypes = {
    files: PropTypes.array
  };

  render() {
    return (
      <CenteredBox>
        {this.props.files.map(file => <div>{file.name}</div>)}
      </CenteredBox>
    );
  }
}
