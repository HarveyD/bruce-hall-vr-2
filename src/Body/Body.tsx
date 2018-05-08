import * as React from 'react';

import Location from '../Location/Location';
import { LocationDetail } from '../Location/LocationDetail';
import LocationList from '../Location/LocationList';

import Panorama from '../Panorama/Panorama';

import './Body.css';

interface IProps {
  selectedLocation: LocationDetail;
  selectLocation(location: LocationDetail): void; 
}

class Body extends React.Component<IProps, {}> {
  public locations: LocationDetail[] = LocationList.Locations;

  public handleLocationClick = (location: LocationDetail): void => {
    this.props.selectLocation(location);

    this.setState({ transitionState: 'started' });
  }

  public hasSelectedLocation(): boolean {
    return Object.keys(this.props.selectedLocation).length > 0;
  }

  public render() {
    const locations = this.locations.map(location => {
      return <Location 
        key={location.name}
        locationDetail={location}
        visible={!this.hasSelectedLocation()}
        handleClick={this.handleLocationClick} />
    });

    return (
      <div className="body">
        { locations }
        {/* { this.hasSelectedLocation() */}
          <Panorama selectedLocation={this.props.selectedLocation}/> 
        }
      </div>
    );
  }
}

export default Body;
