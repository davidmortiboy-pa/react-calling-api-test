import React from 'react';
import PropTypes from 'prop-types';

class ClearButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.clearData}>Clear</button>
      </React.Fragment>
    );
  }
}

ClearButton.propTypes = {
  clearData: PropTypes.func.isRequired
};

export default ClearButton;
