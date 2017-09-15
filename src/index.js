/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
//import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css';

import { Router, browserHistory } from 'react-router';

import getRoutes from './routes';

let store = createStore(
	todoApp,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={getRoutes()} />
  </Provider>,
  document.getElementById('root')
)
