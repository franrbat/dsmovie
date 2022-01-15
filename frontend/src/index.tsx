import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render( 
  <React.StrictMode>
    <App />  {/*eu chamo oq está no App */}
  </React.StrictMode>,
  document.getElementById('root') 
);

