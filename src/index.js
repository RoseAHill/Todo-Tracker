import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// Amplify imports
import Amplify from '@aws-amplify/core'
import awsExports from './aws-exports'
Amplify.configure(awsExports)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
