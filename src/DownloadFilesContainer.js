import React, { Component } from 'react';

import DownloadFiles from './DownloadFiles';

export default class DownloadFilesContainer extends Component {
    state = {
        files: []
    };

    componentDidMount() {
        this.fetchFiles().then(files => this.setState({ files }));
    }

    async fetchFiles() {
        return Promise.resolve([
            {
                name: 'GoT ep3 season 20',
                size: '3GB',
                type: 'mp4'
            },
            {
                name: 'GoT ep2 season 20',
                size: '2GB',
                type: 'mp4'
			},
            {
                name: 'GoT ep1 season 20',
                size: '2.5GB',
                type: 'mp4'
            }
        ]);
    }

    render() {
        return (
            <DownloadFiles files={this.state.files} />
        );
    }
}
