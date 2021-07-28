import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Build from './pages/Build';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Build2 from './pages/Build2';
import Build3 from './pages/Build3';
import Build4 from './pages/Build4';
import Template from './pages/Template';
import Resume from './pages/Resume';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column">
          <Header />
          <div>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/build">
              <Build />
            </Route>
            <Route exact path="/build2">
              <Build2 />
            </Route>
            <Route exact path="/build3">
              <Build3 />
            </Route>
            <Route exact path="/build4">
              <Build4 />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/template">
              <Template />
            </Route>
            <Route exact path="/me">
              <Profile />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/users/:id">
              <Profile />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
