import React from 'react';
import ReactDOM from 'react-dom';
import AppIndex from './AppIndex';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppIndex />, document.getElementById('root'));
registerServiceWorker();
