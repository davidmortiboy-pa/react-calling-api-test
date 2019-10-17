import React from 'react';
import axios from 'axios';
import DownloadButton from './components/DownloadButton';
import ClearButton from './components/ClearButton';
import DataView from './components/DataView';
import {download} from './util/download';
import './App.css';

class App extends React.Component {
  state = {
    data: []
  };

  getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        this.setState({data: res.data});
        download(res.data);
      });
  };

  clearData = () => {
    this.setState({data: []});
  };

  render() {
    return (
      <div className="App">
        <DownloadButton getData={this.getData} />
        <ClearButton clearData={this.clearData} />
        <DataView data={this.state.data} />
      </div>
    );
  }
}

export default App;
