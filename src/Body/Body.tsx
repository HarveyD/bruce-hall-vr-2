import * as React from 'react';

import Location, { ILocationDetails } from '../Location/Location';
import Panorama from '../Panorama/Panorama';

import './Body.css';

interface IProps {
  selectedLocation: ILocationDetails;
  selectLocation(location: ILocationDetails): void; 
}

class Body extends React.Component<IProps, {}> {
  public locations: ILocationDetails[] = [
    { name: 'North Quad', width: 'half', animationDirection: 'left', vrImgName: 'north-quad' },
    { name: 'Dining Hall', width: 'half', animationDirection: 'right', vrImgName: 'dining-hall' },
    { name: 'South Quad', width: 'half', animationDirection: 'left', vrImgName: 'south-quad' },
    { name: 'Reception', width: 'half', animationDirection: 'right', vrImgName: 'reception' },
    { name: 'Packard Quad', width: 'half', animationDirection: 'left', vrImgName: 'pac-quad' },
    { name: 'Extension Lawn', width: 'half', animationDirection: 'right', vrImgName: 'extension-lawn' },
    { name: 'Front of Bruce Hall', width: 'full', animationDirection: 'bottom', vrImgName: 'front' }
  ];

  constructor(props: IProps) {
    super(props);
    
    this.handleLocationClick = this.handleLocationClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  public handleLocationClick(location: ILocationDetails): void {
    this.props.selectLocation(location);
  }

  public hasSelectedLocation(): boolean {
    return Object.keys(this.props.selectedLocation).length > 0;
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
          && <Panorama 
                backEvent={this.handleBackClick}
                selectedLocation={this.props.selectedLocation}/> 
        }
      </div>
    );
  }
}

export default Body;
