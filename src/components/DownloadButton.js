import React from 'react';
import PropTypes from 'prop-types';

class DownloadButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.getData}>Go</button>
      </React.Fragment>
    );
  }
}

DownloadButton.propTypes = {
  getData: PropTypes.func.isRequired
};

export default DownloadButton;
