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

import { Auth0Provider } from "@auth0/auth0-react";

React.icons = icons

ReactDOM.render(
  <Auth0Provider
    domain="dev-9v2irmh0.us.auth0.com"
    clientId="Ue5bRivqStA85NNiluSxrTstNCdtPoWm"
    redirectUri="admin.horizon.aykmall.net/hero"
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// Apollo #1
// import ApolloClient from "apollo-boost";
// import { ApolloProvider } from "react-apollo";

// // apollo client setup
// const client = new ApolloClient({
//   uri: "http://localhost:3000/___graphql"
// })

// Apollo #2
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   HttpLink,
//   from,
// } from "@apollo/client";
// import { onError } from "@apollo/client/link/error";

// const errorLink = onError(({ graphqlErrors, networkError }) => {
//   if (graphqlErrors) {
//     graphqlErrors.map(({ message, location, path }) => {
//       alert(`Graphql error ${message}`);
//     });
//   }
// });

// const link = from([
//   errorLink,
//   new HttpLink({ uri: "http://localhost:3000/" }),
// ]);

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: link,
// });
