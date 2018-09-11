import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reducers from './reducers';


import Home from './components/home';
import About from './components/about_me';
import Project from './components/projects';
import Contact from './components/contact';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/about_me" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/outlook" component={() => window.location = 'https://outlook.live.com/owa/'}/>
          <Route exact path="/gmail" component={() => window.location = 'https://mail.google.com/'}/>
          <Route exact path="/yahoo" component={() => window.location = 'https://overview.mail.yahoo.com/'}/>
          <Route exact path="/inbox" component={() => window.location = 'http://www.inbox.com/tech/'}/>
          <Route exact path="/icloud" component={() => window.location = 'https://www.icloud.com/'}/>
          <Route exact path="/facebook" component={() => window.location = 'https://www.facebook.com/nathaniel.young.16940?viewas=100000686899395&privacy_source=timeline_gear_menu&fb_dtsg_ag=AdzbCm6OFRLNtb9gzeofD9bX3HGRKHz5NEdmFgLks39MYA%3AAdyxLLNwy4qfV7Cq2qdSwYRVfJMEknTkoLiFKJg5S3f0Mg#_'}/>
          <Route exact path="/linkedin" component={() => window.location = 'https://www.linkedin.com/in/nate-p-young/'}/>
          <Route exact path="/github" component={() => window.location = 'https://github.com/RazorzMcLazorz'}/>
          <Route exact path="/madlibs" component={() => window.location = 'https://madlibschallenge.herokuapp.com/'}/>
        </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
