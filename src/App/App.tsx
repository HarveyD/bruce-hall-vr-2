import * as React from 'react';
import Body from '../Body/Body';
import Navbar from '../Navbar/Navbar';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navbar />
        <Body />
      </div>
    );
  }
}

export default App;
