import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './components/app-router/AppWrapper';
import * as serviceWorker from './serviceWorker';
import './assets/foundation/foundation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
// ReactDOM.render(<Slideshow />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
