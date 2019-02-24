import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contact from './Authorize';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Contact />, document.getElementById('root'));

serviceWorker.unregister();
