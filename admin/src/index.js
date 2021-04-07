import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import store from './store'

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:8000/___graphql"
})

React.icons = icons

ReactDOM.render(
  <ApolloProvider client={client}>
  <Provider store={store}>
    <App/>
  </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
