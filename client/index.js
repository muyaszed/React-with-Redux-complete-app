import React, { Component } from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {AppContainer} from 'react-hot-loader';

render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('app')
    );


if (module.hot) {
  module.hot.accept('./components/App', () => {
    const App = require('./components/App').default;
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}