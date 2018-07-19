import React, { Component } from 'react';
import './App.css';
import PhotoCredit from './PhotoCredit';
import UploadFiles from './UploadFiles';
import FileList from './FileList';

import { default as GrommetApp } from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Paragraph from 'grommet/components/Paragraph';

class App extends Component {

  constructor() {
    super();

    this.state = {
      files: [
        { name: 'My First file.png', size: '500MB', type: 'png' },
        { name: 'Paris Photo.jpg', size: '50KB', type: 'jpg' },
      ]
    };
  }

  render() {
    return (
      <GrommetApp centered={false} style={{ position: 'relative' }}>
        <Box full={'vertical'} texture={'/pigeons.jpg'}>
          <Box full={'vertical'} justify={'center'} direction={'column'} align={'center'} pad={'small'}>
            <Form onSubmit={() => {}}>
              <Box colorIndex={'neutral-1-a'} pad={'medium'}>
                <Paragraph style={{ fontWeight: 500 }} size={'large'}>
                  Send up to 20GB of files at a time in a simple way.
                </Paragraph>
                <hr/>
                <UploadFiles />
                <FileList files={this.state.files} />
              </Box>
              
              <FormField label='Email to'>
                <TextInput />
              </FormField>
              <FormField label='Your email'>
                <TextInput />
              </FormField>
              <FormField label='Message'>
                <TextInput />
              </FormField>
              
            </Form>
          </Box>
        </Box>
        <PhotoCredit />
      </GrommetApp>
    );
  }
}

export default App;
