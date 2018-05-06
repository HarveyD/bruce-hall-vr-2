import * as React from 'react';
import Body from '../Body/Body';
import Navbar from '../Navbar/Navbar';

import { LocationDetail } from '../Location/LocationDetail';

import './App.css';

interface IState {
  selectedLocation: LocationDetail;
}

class App extends React.Component<{}, IState> {
  public state = { 
    selectedLocation: { } as LocationDetail
  };

  public selectLocation = (location: LocationDetail): void => {
    this.setState({ selectedLocation: location });
  }

  public resetLocation = (): void => {
    this.setState({ selectedLocation: { } as LocationDetail });
  }

  public render() {
    return (
      <div className="App">
        <Navbar 
          locationTitle={this.state.selectedLocation.name} 
          goBack={this.resetLocation}
        />
        <Body 
          selectedLocation={this.state.selectedLocation} 
          selectLocation={this.selectLocation} 
        />
      </div>
    );
  }
}

export default App;
