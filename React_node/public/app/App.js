import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import{ Router, Route, IndexRoute, hashHistory} from "react-router";
import {IntlProvider, FormattedMessage} from 'react-intl';

import Layout from './components/indexLayout.js';
import Comments from './components/comment.js';
import Projects from './components/projects.js';
import About from './components/about.js';
import commentFeed from './components/commentsFeed.js';

/*this.getComments = function(){
        $http.get('/api/commments').then(function(response){
          this.assignments = response.data;
        });
      }
this.getComments();*/

ReactDOM.render(
<IntlProvider locale="en">
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="create" component={Comments}></Route>
      <Route path="projects(/:project)(/:id)" component={Projects}></Route>
      <Route path="about" component={About}></Route>
      <Route path="commentFeed" component={commentFeed}></Route>
    </Route>
  </Router>
</IntlProvider>
  , document.getElementById('app'))
