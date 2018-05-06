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
    { name: 'North Quad', width: Constants.Half, animationDirection: Constants.Left, vrImgName: 'north-quad' },
    { name: 'Dining Hall', width: Constants.Half, animationDirection: Constants.Right, vrImgName: 'dining-hall' },
    { name: 'South Quad', width: Constants.Half, animationDirection: Constants.Left, vrImgName: 'south-quad' },
    { name: 'Reception', width: Constants.Half, animationDirection: Constants.Right, vrImgName: 'reception' },
    { name: 'Packard Quad', width: Constants.Half, animationDirection: Constants.Left, vrImgName: 'pac-quad' },
    { name: 'Extension Lawn', width: Constants.Half, animationDirection: Constants.Right, vrImgName: 'extension-lawn' },
    { name: 'Front of Bruce Hall', width: Constants.Full, animationDirection: Constants.Down, vrImgName: 'front' }
  ];

  public handleLocationClick = (location: ILocationDetails): void => {
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
