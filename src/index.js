import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';

const Root = (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
