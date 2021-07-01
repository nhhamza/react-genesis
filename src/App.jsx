import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTES from './constants/routes';

const App = () => {
  return (
    <Switch>
      {ROUTES.map(route => (
        <Route key={route} {...route} />
      ))}
    </Switch>
  );
};

export default App;
