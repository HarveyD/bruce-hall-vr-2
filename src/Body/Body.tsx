import * as React from "react";

import Location from "../Location/Location";
import { LocationDetail } from "../Location/LocationDetail";
import LocationList from "../Location/LocationList";

import Panorama from "../Panorama/Panorama";

import "./Body.css";

interface IProps {
  selectedLocation: LocationDetail;
  selectLocation(location: LocationDetail): void;
}

class Body extends React.Component<IProps, {}> {
  public locations: LocationDetail[] = LocationList.Locations;

  public handleLocationClick = (location: LocationDetail): void => {
    this.props.selectLocation(location);

    this.setState({ transitionState: "started" });
  };

  public hasSelectedLocation(): boolean {
    return Object.keys(this.props.selectedLocation).length > 0;
  }

  public render() {
    return (
      <section className="body-container">
        {this.renderLocations()}
        {this.hasSelectedLocation() && (
          <Panorama selectedLocation={this.props.selectedLocation} />
        )}
      </section>
    );
  }

  private renderLocations() {
    return this.locations.map(location => (
      <Location
        key={location.name}
        locationDetail={location}
        visible={!this.hasSelectedLocation()}
        handleClick={this.handleLocationClick}
      />
    ));
  }
}

export default Body;
