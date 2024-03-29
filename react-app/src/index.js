import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import './styles/nav.css';
import './styles/modals.css';
import './styles/forms.css';
import './styles/profilePage.css';
import './styles/spinner.css';
import './styles/pageNotFound.css';
import './styles/footer.css';
import './styles/scrollbars.css';
import App from './App';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
