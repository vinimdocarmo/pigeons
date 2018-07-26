import React, { Component } from 'react';
import CustomInputFile from './CustomInputFile';
import FileList from './FileList';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Send from 'grommet/components/icons/base/Send';
import CenteredBox from './CenteredBox';

class SenderForm extends Component {
  state = {
    files: []
  };

  setFiles = files => {
    this.setState({ files });
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
      <CenteredBox>
        <Form onSubmit={() => {}}>
          <Box colorIndex={'neutral-1-a'} pad={'medium'}>
            <Paragraph style={{ fontWeight: 500 }} size={'large'}>
              Send up to 20GB of files at a time in a simple way.
            </Paragraph>
            <hr />
            <CustomInputFile onChange={this.setFiles} />
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

          <Box margin={{ top: 'small' }}>
            <Button primary={true} type="submit" label="Send" fill={true} icon={<Send />} />
          </Box>
        </Form>
      </CenteredBox>
    );
  }
}

export default SenderForm;
