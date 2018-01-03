import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import configureStore from './store/configureStore';

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('root')
  );
}

render(Root);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    render(Root);
  });
}
