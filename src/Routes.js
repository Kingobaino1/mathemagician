import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Home from './pages/Home';
import Quote from './pages/Quote';

const Routes = () => (
  (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/calculator" component={App} />
          <Route exact path="/quotes" component={Quote} />
        </Switch>
      </BrowserRouter>
    </>
  )
);

export default Routes;
