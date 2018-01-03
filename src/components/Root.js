import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Table from './Table';

class Root extends React.Component {
  render() {
    return(
      <Provider store={this.props.store}>
        <Router>
          <Route path="/">
            <Route path="/users" component={Table} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;
