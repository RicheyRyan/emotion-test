import React, { Component } from 'react';
import { List } from './Components/Index';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Here are the components: </h1>
        <List />
      </React.Fragment>
    );
  }
}

export default App;
