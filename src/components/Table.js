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
};

function applyFilter(array, filtersObject) {
  let filteredArray = array;

  Object.keys(filtersObject).forEach((fieldName) => {
    const fieldValue = filtersObject[fieldName];

    filteredArray = filteredArray.filter((item) => {
      return item[fieldName].search(new RegExp(fieldValue, "i")) >= 0;
    });
  });

  return filteredArray;
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

  handleFilterChange(field, event) {
    const filter = {
      [field]: event.target.value
    };

    this.props.changeFilter(filter);
  }

  render() {
    const { users, activePage, pageSize, filter } = this.props;
    const startIndex = activePage * pageSize;
    const endIndex = startIndex + pageSize;

    const filteredUsers = applyFilter(users, filter);
    const pagesCount = Math.ceil(filteredUsers.length / pageSize);
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
              <th><input type='text' className='form-control' onChange={(event) => this.handleFilterChange('firstName', event)}/></th>
              <th><input type='text' className='form-control' onChange={(event) => this.handleFilterChange('lastName', event)}/></th>
              <th><input type='text' className='form-control' onChange={(event) => this.handleFilterChange('email', event)}/></th>
              <th><input type='text' disabled className='form-control' onChange={(event) => this.handleFilterChange('status', event)}/></th>
            </tr>
          </thead>
          <tbody>
          {
            filteredUsers.slice(startIndex, endIndex)
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
    pageSize: state.tableInfo.pageSize,
    filter: state.tableInfo.filter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(userActions.getUsersAction()),
    nextPage: () => dispatch(tableActions.nextPage()),
    prevPage: () => dispatch(tableActions.prevPage()),
    changeFilter: (filter) => dispatch(tableActions.setFilter(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
