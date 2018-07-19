import React, { Component } from 'react';
import './App.css';
import AppCredit from './AppCredit';
import UploadFiles from './UploadFiles';
import FileList from './FileList';

import { default as GrommetApp } from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Paragraph from 'grommet/components/Paragraph';
import Footer from 'grommet/components/Footer';

class App extends Component {
  state = {
    files: []
  };

  addFile = file => {
    const { files } = this.state;
    this.setState({ files: [...files, file] });
  };

  removeFile = file => {
    const { files } = this.state;
    const index = files.indexOf(file);

    if (index === -1) {
      return;
    }

    files.splice(index, 1);

    this.setState({ files });
  };

  render() {
    return (
      <GrommetApp centered={false} style={{ position: 'relative' }}>
        <Box full={'vertical'} texture={'/pigeons.jpg'}>
          <Box
            full={'vertical'}
            justify={'center'}
            direction={'column'}
            align={'center'}
            pad={'small'}
          >
            <Form onSubmit={() => {}}>
              <Box colorIndex={'neutral-1-a'} pad={'medium'}>
                <Paragraph style={{ fontWeight: 500 }} size={'large'}>
                  Send up to 20GB of files at a time in a simple way.
                </Paragraph>
                <hr />
                <UploadFiles addFile={this.addFile} />
                <FileList files={this.state.files} removeFile={this.removeFile} />
              </Box>

              <FormField label="Email to">
                <TextInput />
              </FormField>
              <FormField label="Your email">
                <TextInput />
              </FormField>
              <FormField label="Message">
                <TextInput />
              </FormField>
            </Form>
          </Box>
          <Footer justify="center" direction="row" responsive={true}>
            <AppCredit />
          </Footer>
        </Box>
      </GrommetApp>
    );
  }
}

export default App;
