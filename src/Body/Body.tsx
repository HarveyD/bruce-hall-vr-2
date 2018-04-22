import * as React from 'react';

// import { Pannellum } from '360-react-pannellum'
import Location, { ILocationDetails } from '../Location/Location';
import Panorama from '../Panorama/Panorama';

import './Body.css';

interface IState {
  selectedLocation: ILocationDetails;
}

class Body extends React.Component<{}, IState> {
  public locations: ILocationDetails[] = [
    { name: 'North Quad', width: 'half', imgUrl: 'https://pannellum.org/images/alma.jpg' },
    { name: 'South Quad', width: 'half', imgUrl: 'https://pannellum.org/images/tocopilla.jpg' }
  ];

  constructor(props: any) {
    super(props);
    
    this.handleLocationClick = this.handleLocationClick.bind(this);

    this.state = {
      selectedLocation: {} as ILocationDetails
    }
  }

  public handleLocationClick(location: ILocationDetails) {
    this.setState(prevState => {
      return {
        selectedLocation: location
      }
    });
  }

  public render() {
    const locations = this.locations.map(location => {
      return <Location 
        key={location.name} 
        locationDetails={location} 
        handleClick={this.handleLocationClick} />
    });

    return (
      <div className="body">
        { locations }
        { Object.keys(this.state.selectedLocation).length > 0 && <Panorama selectedLocation={this.state.selectedLocation}/> }
      </div>
    );
  }
}

export default Body;
