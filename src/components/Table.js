import React from 'react';
import { connect } from 'react-redux';
import { userActions, tableActions } from '../actions';
import PaginationButtons from './PaginationButtons';

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

  prevPage() {
    this.props.prevPage();
  }

  nextPage() {
    this.props.nextPage();
  }

  render() {
    const { users, activePage, pageSize } = this.props;
    const startIndex = activePage * pageSize;
    const endIndex = startIndex + pageSize;
    const pagesCount = Math.ceil(users.length / pageSize);
    return (
      <div>
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
            users.slice(startIndex, endIndex)
              .map((user, key) => <TableRow key={key} props={user} />)
          }
          </tbody>
        </table>
        <PaginationButtons
          currentPage={activePage}
          prevClick={this.prevPage.bind(this)}
          nextClick={this.nextPage.bind(this)}
          pagesCount={pagesCount}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersInfo.users,
    activePage: state.tableInfo.activePage,
    pageSize: state.tableInfo.pageSize
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(userActions.getUsersAction()),
    nextPage: () => dispatch(tableActions.nextPage()),
    prevPage: () => dispatch(tableActions.prevPage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
