import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DocumentMeta from 'react-document-meta';

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import AppWithAuth from "./AppWithAuth";
Amplify.configure(awsExports);

const meta = {
  title: 'Taskie',
  description: 'Business management solutions',
  canonical: 'https://taskiehelp.com',
  meta: {
    charset: 'utf-8',
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }
};

ReactDOM.render(
  <React.StrictMode>
    <DocumentMeta {...meta}>
      <AppWithAuth />
    </DocumentMeta>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
