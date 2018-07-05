import React, { Component } from 'react';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Close from 'grommet/components/icons/base/Close';

export default class FileList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            files: props.files
        };
    }

    onFileRemovedHandler(file) {
        
    }

    render() {
        const { files } = this.state;

        return (
            <Tiles fill={true} direction={'column'} flush={false} size={'small'} pad={'none'}>
                {
                (files.map((file, i) => (
                    <Tile key={i} wide={true} direction={'row'} justify={'between'} responsive={false}>
                    <div>
                        <div>{file.name}</div>
                        <div style={{ fontSize: 12 }}>{file.size} | {file.type}</div>
                    </div>
                    <div>
                        <Close onClick={() => this.onFileRemovedHandler(file)}/>
                    </div>
                    </Tile>
                )))
                }
            </Tiles>
        );
    }

}