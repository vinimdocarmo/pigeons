import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CenteredBox from './CenteredBox';
import FileList from './FileList';
import FileItem from './FileItem';
import Box from 'grommet/components/Box';
import Download from 'grommet/components/icons/base/Download';

export default class DownloadFiles extends Component {
  static propTypes = {
    files: PropTypes.array
  };

  render() {
    const { files } = this.props;
    return (
      <CenteredBox>
        <Box colorIndex={'neutral-1-a'} pad={'medium'} style={{ width: '480px' }}>
          <FileList>
            {files.map((file, i) => (
              <FileItem key={i} file={file} icon={<Download onClick={() => this.removeFile(file)} />} />
            ))}
          </FileList>
        </Box>
      </CenteredBox>
    );
  }
}
