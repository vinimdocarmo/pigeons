import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SenderForm from './SenderForm';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SenderForm} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
