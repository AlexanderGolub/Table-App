import React from 'react';
import { connect } from 'react-redux';

class PaginationButtons extends React.Component {
  render() {
    return (
      <div className="btn-group">
        <button type="button"
          className="btn btn-secondary"
          onClick={this.props.prevClick}
          disabled={this.props.currentPage <= 0}
        >
          Prev
        </button>

        <button type="button" className="btn btn-secondary" disabled>
          {this.props.currentPage + 1}
        </button>

        <button type="button"
          className="btn btn-secondary"
          onClick={this.props.nextClick}
          disabled={this.props.currentPage >= this.props.pagesCount - 1}
        >
          Next
        </button>
      </div>
    );
  }
}

export default PaginationButtons;
