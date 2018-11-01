import * as React from "react";
import * as ReactDOM from "react-dom";

import '../scss/main.scss'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    RouteComponentProps,
  } from 'react-router-dom';
  
  import { ApolloClient } from 'apollo-boost';
  import { ApolloProvider } from 'react-apollo';
  import { SchemaLink } from 'apollo-link-schema';
  import { InMemoryCache } from 'apollo-cache-inmemory';
  import gql from 'graphql-tag';
  import { schema } from '../mockData/mockClient';


import Header from './Header';
import Admin from './Admin';

const mockClient = new ApolloClient({
  link: new SchemaLink({ schema }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={mockClient}>
    <Router basename={process.env.PUBLIC_URL}>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/personal-info" render={props => <Admin />} />
          <Route path="/security" render={props => <Admin />} />
          <Route path="/personalization" render={props => <Admin />} />

          <Route path="/overview" render={props => <Admin />} />
          <Route path="/projects" render={props => <Admin />} />
          <Route path="/roles" render={props => <Admin />} />
          <Route path="/users" render={props => <Admin />} />
          <Route path="/audit-trail" render={props => <Admin />} />
          <Route path="/export-templates" render={props => <Admin />} />

          {/* Sets default page when /admin is called */}
          <Redirect from="/" exact to="/users" />
          <Redirect from="/index" exact to="/users" />
        </Switch>
      </React.Fragment>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);