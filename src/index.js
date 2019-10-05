import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import App from './App.comp';
import * as serviceWorker from './serviceWorker';
import './index.css';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import colorVars from './utils/cssColorVars';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

const theme = createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: 115
    }
  },
  palette: {
    primary: colorVars.primary,
    secondary: colorVars.secondary,
    action: {
      disabled: colorVars.disabled,
      disabledBackground: colorVars.disabledBackground
    }
  },
  spacing: 8,
  shape: {
    borderRadius: 0
  }
});

Amplify.configure(aws_exports);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
