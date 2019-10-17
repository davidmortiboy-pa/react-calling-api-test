import React from 'react';
import PropTypes from 'prop-types';

class DataView extends React.Component {
  render() {
    console.log(this.props.data);

    return (
      <React.Fragment>
        { this.props.data.map((x) =>
          <ul key={x.id}>
            <li>Id: {x.id}</li>
            <li >Title: {x.title}</li>
            <li>Description: <pre>{x.body}</pre></li>
          </ul>
        )}
      </React.Fragment>
    );
  }
}

DataView.propTypes = {
  data: PropTypes.array.isRequired
};

export default DataView;
