import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';

import { default as GrommetApp } from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';
import AppCredit from './AppCredit';
import GithubCorner from './GithubCorner';

const Router = () => (
  <GrommetApp centered={false} style={{ position: 'relative' }}>
    <Box full={'vertical'} texture={'/pigeons.jpg'}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Footer justify="center" direction="row" responsive={true}>
        <AppCredit />
      </Footer>
    </Box>
    <GithubCorner />
  </GrommetApp>
);

export default Router;
