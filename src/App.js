import React from 'react';
import './App.css';
import GrommetApp from 'grommet/components/App';
import Footer from 'grommet/components/Footer';
import AppCredit from './AppCredit';
import GithubCorner from './GithubCorner';
import Box from 'grommet/components/Box';
import Router from './Router';

const App = () => (
  <GrommetApp centered={false} style={{ position: 'relative' }}>
    <Box full={'vertical'} texture={'/pigeons.jpg'}>
      <Router />
      <Footer justify="center" direction="row" responsive={true}>
        <AppCredit />
      </Footer>
    </Box>
    <GithubCorner />
  </GrommetApp>
);

export default App;
