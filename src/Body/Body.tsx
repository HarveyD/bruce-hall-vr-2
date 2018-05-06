import * as React from 'react';

import Constants from '../constants';
import Location, { ILocationDetails } from '../Location/Location';
import Panorama from '../Panorama/Panorama';

import './Body.css';

interface IProps {
  selectedLocation: ILocationDetails;
  selectLocation(location: ILocationDetails): void; 
}

class Body extends React.Component<IProps, {}> {
  public locations: ILocationDetails[] = [
    { name: 'North Quad', width: 'half', animationDirection: Constants.Left, vrImgName: 'north-quad' },
    { name: 'Dining Hall', width: 'half', animationDirection: Constants.Right, vrImgName: 'dining-hall' },
    { name: 'South Quad', width: 'half', animationDirection: Constants.Left, vrImgName: 'south-quad' },
    { name: 'Reception', width: 'half', animationDirection: Constants.Right, vrImgName: 'reception' },
    { name: 'Packard Quad', width: 'half', animationDirection: Constants.Left, vrImgName: 'pac-quad' },
    { name: 'Extension Lawn', width: 'half', animationDirection: Constants.Right, vrImgName: 'extension-lawn' },
    { name: 'Front of Bruce Hall', width: 'full', animationDirection: Constants.Down, vrImgName: 'front' }
  ];

  constructor(props: IProps) {
    super(props);
    
    this.handleLocationClick = this.handleLocationClick.bind(this);
  }

  public handleLocationClick(location: ILocationDetails): void {
    this.props.selectLocation(location);
  }

  public hasSelectedLocation(): boolean {
    return Object.keys(this.props.selectedLocation).length > 0;
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
          && <Panorama selectedLocation={this.props.selectedLocation}/> 
        }
      </div>
    );
  }
}

export default Body;
