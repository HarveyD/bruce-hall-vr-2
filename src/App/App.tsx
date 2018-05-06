import * as React from 'react';
import Body from '../Body/Body';
import Navbar from '../Navbar/Navbar';

import { ILocationDetails } from '../Location/Location';

import './App.css';

interface IState {
  selectedLocation: ILocationDetails;
}

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      selectedLocation: { } as ILocationDetails
    };

    this.selectLocation = this.selectLocation.bind(this);
    this.resetLocation = this.resetLocation.bind(this);
  }

  public selectLocation(location: ILocationDetails): void {
    this.setState(prevState => {
      return {
        selectedLocation: location
      }
    });
  }

  public resetLocation(): void {
    this.setState(prevState => {
      return {
        selectedLocation: { } as ILocationDetails
      }
    })
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
