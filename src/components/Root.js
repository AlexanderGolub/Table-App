import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Provider store={this.props.store}>
        <Router>
          <Route path="/">
            <Route path="/users" component={App} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;
