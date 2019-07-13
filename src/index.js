import React from 'react';
import ReactDOM from 'react-dom';
import Centralizer from './Centralizer'
import * as serviceWorker from './serviceWorker';
import './styles/styles.css'
ReactDOM.render(<Centralizer />, document.getElementById('root'));
serviceWorker.unregister();
