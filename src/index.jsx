import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import { ThemeProvider } from '@material-ui/core';
import theme from './styles/theme';
import App from './App';
import './index.scss';

const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('app')
);
