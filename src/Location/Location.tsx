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

    this.locationClickEvent = this.locationClickEvent.bind(this);
    this.animationEnded = this.animationEnded.bind(this);
  }

  public animationEnded(): void {
    console.log('animation ended');
  }

  public locationClickEvent() {
    this.props.handleClick(this.props.locationDetails);
  }

  public getPosition(): string {
    return this.props.visible
      ? ''
      : this.props.locationDetails.animationDirection;
  }

  public render() {
    const { name, width } = this.props.locationDetails;

    const previewImage = require(`../assets/preview/${this.props.locationDetails.vrImgName}.jpg`);

    return (
      <div onTransitionEnd={this.animationEnded} style={{ backgroundImage: `url(${previewImage})`}} className={`location ${width} ${this.getPosition()}`} onClick={(this.locationClickEvent)}>
        <div className="overlay"/>
        <div className="preview-name"> { name } </div>
      </div>
    );
  }
}

export default Location;
