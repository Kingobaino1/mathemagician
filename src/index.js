import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import Routes from './Routes';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Routes />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root'),
);
