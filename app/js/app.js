import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'components/App';
import Tree from 'views/Tree';
import About from 'views/About';


ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Tree } />
      <Route path='about' component={ About } />
    </Route>
  </Router>,
  document.getElementById('app') // eslint-disable-line
);
