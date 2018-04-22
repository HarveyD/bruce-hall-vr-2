import * as React from 'react';
import './Location.css';

interface IProps {
  locationDetails: ILocationDetails;
  handleClick(locationName: ILocationDetails): void;
}

export interface ILocationDetails {
  name: string;
  width: string;
  imgUrl: string;
}

class Location extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.props.handleClick(this.props.locationDetails);
  }

  public render() {
    const { name, width } = this.props.locationDetails;

    return (
      <div className={`location ${width}`} onClick={(this.handleClick)}>
        <p> { name } </p>
      </div>
    );
  }
}

export default Location;
