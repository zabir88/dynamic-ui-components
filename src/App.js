import React, { Component } from 'react';
import Form from './lib/Form';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">Welcome to ZH-UI-Library</h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
