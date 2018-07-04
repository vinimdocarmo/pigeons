import React, { Component } from 'react';

import Add from 'grommet/components/icons/base/Add';
import Pulse from 'grommet/components/icons/Pulse';
import Box from 'grommet/components/Box';

export default class UploadFiles extends Component {

    render() {
        return (
            <Box direction={'row'} align={'center'} responsive={false}>
                <Pulse icon={<Add />}></Pulse>
                <span style={{ marginLeft: 10 }}>Add your files</span>
            </Box>
        );
    }

}