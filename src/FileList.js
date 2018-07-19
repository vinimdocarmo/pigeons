import React, { Component } from 'react';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Close from 'grommet/components/icons/base/Close';
import FileItem from './FileItem';

export default class FileList extends Component {
  render() {
    const { files } = this.props;

    return (
      <Tiles fill={true} direction={'column'} flush={false} size={'small'} pad={'none'}>
        {files.map((file, i) => (
          <FileItem key={i} file={file} removeFile={this.props.removeFile} />
        ))}
      </Tiles>
    );
  }
}
