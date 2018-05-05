import * as React from 'react';
import './Location.css';

interface IProps {
  visible: boolean;
  locationDetails: ILocationDetails;
  handleClick(locationName: ILocationDetails): void;
}

export interface ILocationDetails {
  name: string;
  width: string;
  vrImgName: string;
  animationDirection: string;
}

class Location extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.props.handleClick(this.props.locationDetails);
  }

  public getPosition(): string {
    return this.props.visible ? '' : this.props.locationDetails.animationDirection;
  }

  public render() {
    const { name, width } = this.props.locationDetails;

    // const previewImage = require(`../../public/photos/${this.props.locationDetails.vrImgName}.png`);

    return (
      <div className={`location ${width} ${this.getPosition()}`} onClick={(this.handleClick)}>
        {/* <img className="preview" src='test' /> */}
        <p> { name } </p>
      </div>
    );
  }
}

export default Location;
