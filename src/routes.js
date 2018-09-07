import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout';
import Home from './components/home';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact component={ Home } path="/" />
      </Switch>
    </Layout>
  );
}

export default Routes;
