import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './pages/App';
import IndexPage from './pages/IndexPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage} />
  </Route>
);
