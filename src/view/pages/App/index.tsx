import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from 'store/rootReducer';

import { routes } from 'routes';

import { Signin } from 'view/pages/Signin';
import { Dashboard } from 'view/pages/Dashboard';

export const App: React.FC = () => {

  const { token } = useSelector((state: AppState) => state.auth);

  const redirectHome = !token && <Redirect to={routes.home} />

  return (
    <Switch>
      <Route exact 
        path={routes.home}
        render={() => (token? <Redirect to={routes.dashboard} /> : <Signin />)} 
        />    
        <Route exact 
        path={routes.dashboard}
        render={() => (token ? <Dashboard /> : redirectHome)} 
        />  
    </Switch>
  );
}

