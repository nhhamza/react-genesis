import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTES from './constants/routes';

const App = () => {
  return (
    <div className="page-container">
      <Switch>
        {ROUTES.map(route => (
          <Route key={route} {...route} />
        ))}
      </Switch>
    </div>
  );
};

export default App;
