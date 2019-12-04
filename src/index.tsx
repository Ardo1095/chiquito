import React from 'react';
import ReactDOM from 'react-dom';
import 'rsuite/dist/styles/rsuite-default.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
