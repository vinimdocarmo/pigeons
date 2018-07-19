import React, { Component } from "react";

import Add from "grommet/components/icons/base/Add";
import Pulse from "grommet/components/icons/Pulse";
import Box from "grommet/components/Box";

export default class UploadFiles extends Component {
  render() {
    const sampleFile = {
      name: "GoT ep3 season 20",
      size: "3GB",
      type: "mp4"
    };

    return (
      <Box direction={"row"} align={"center"} responsive={false}>
        <Pulse icon={<Add />} onClick={() => this.props.addFile(sampleFile)} />
        <span style={{ marginLeft: 10 }}>Add your files</span>
      </Box>
    );
  }
}
