import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'stores';
import App from './App';

it('renders without crashing', () => {
  const history = createBrowserHistory();
  const store = configureStore(history);
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
