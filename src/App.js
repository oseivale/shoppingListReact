import React, { Component } from 'react';
import './App.css';
import AddItem from './Components/AddItem';

class App extends Component {
  render() {
    return (
      <div className="App">
 		<AddItem />
      </div>
    );
  }
}

export default App;
