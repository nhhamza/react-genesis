import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ROUTES from './constants/routes';

const App = () => {
  return (
    <>
      <Switch>
        {ROUTES.map(route => (
          <Route key={route} {...route} />
        ))}
      </Switch>
    </>
  );
};

export default App;
