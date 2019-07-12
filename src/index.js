import React from 'react';
import ReactDOM from 'react-dom';
import Centralizer from './Centralizer'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Centralizer />, document.getElementById('root'));
serviceWorker.unregister();
