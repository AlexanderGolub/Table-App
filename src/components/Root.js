import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Table from './Table';

class Root extends React.Component {
  render() {
    return(
      <Provider store={this.props.store}>
        <Router>
          <div>
            <Route path="/">
              <Redirect to="/users" />
            </Route>
            <Route path="/users" component={Table} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default Root;
