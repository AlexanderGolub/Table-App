import React from 'react';
import { connect } from 'react-redux';
import { userActions, tableActions } from '../actions';

const TableRow = ({props}) => {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td><a href={`mailto:${props.email}`}>{props.email}</a></td>
      <td>{props.status ? 'active' : 'inactive'}</td>
    </tr>
  );
}

class Table extends React.Component {
  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <table className='table table-striped table-hover'>
        <thead className='thead-dark'>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
          <tr>
            <th><input type='text' /></th>
            <th><input type='text' /></th>
            <th><input type='text' /></th>
            <th><input type='text' /></th>
          </tr>
        </thead>
        <tbody>
        {
          this.props.users.map((user, key) => <TableRow key={key} props={user}/>)
        }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(userActions.getUsersAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
