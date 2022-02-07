import './index.css';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import { App } from 'App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,

  document.getElementById('root'),
);
reportWebVitals();
