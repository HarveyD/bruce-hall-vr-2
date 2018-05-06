import * as React from 'react';

import Location, { ILocationDetails } from '../Location/Location';
import Panorama from '../Panorama/Panorama';

import './Body.css';

interface IState {
  selectedLocation: ILocationDetails;
}

class Body extends React.Component<{}, IState> {
  public locations: ILocationDetails[] = [
    { name: 'North Quad', width: 'half', animationDirection: 'left', vrImgName: 'north-quad' },
    { name: 'Dining Hall', width: 'half', animationDirection: 'right', vrImgName: 'dining-hall' },
    { name: 'South Quad', width: 'half', animationDirection: 'left', vrImgName: 'south-quad' },
    { name: 'Reception', width: 'half', animationDirection: 'right', vrImgName: 'reception' },
    { name: 'Packard Quad', width: 'half', animationDirection: 'left', vrImgName: 'pac-quad' },
    { name: 'Extension Lawn', width: 'half', animationDirection: 'right', vrImgName: 'extension-lawn' },
    { name: 'Front of Bruce Hall', width: 'full', animationDirection: 'bottom', vrImgName: 'front' }
  ];

  constructor(props: any) {
    super(props);
    
    this.handleLocationClick = this.handleLocationClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);

    this.state = {
      selectedLocation: { } as ILocationDetails
    }
  }

  public handleLocationClick(location: ILocationDetails): void {
    this.setState(prevState => {
      return {
        selectedLocation: location
      }
    });
  }

  public hasSelectedLocation(): boolean {
    return Object.keys(this.state.selectedLocation).length > 0;
  }

  public handleBackClick(): void {
    this.setState(prevState => {
      return {
        selectedLocation: { } as ILocationDetails
      }
    });
  }

  public render() {
    const locations = this.locations.map(location => {
      return <Location 
        key={location.name} 
        locationDetails={location}
        visible={!this.hasSelectedLocation()}
        handleClick={this.handleLocationClick} />
    });

    return (
      <div className="body">
        { locations }
        { this.hasSelectedLocation()
          && <Panorama backEvent={this.handleBackClick} selectedLocation={this.state.selectedLocation}/> }
      </div>
    );
  }
}

export default Body;
