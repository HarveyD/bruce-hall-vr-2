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

function Location(props: IProps) {
  const transitionEnded = (event: any): void => {
    console.log(event.propertyName);
  }

  const locationClickEvent = (): void => {
    props.handleClick(props.locationDetails);
  }

  const getPosition = () => props.visible 
    ? ''
    : props.locationDetails.animationDirection;

  const { name, width } = props.locationDetails;
  const previewImage = require(`../assets/preview/${props.locationDetails.vrImgName}.jpg`);

  return (
    <div onTransitionEnd={transitionEnded} style={{ backgroundImage: `url(${previewImage})`}} className={`location ${width} ${getPosition()}`} onClick={(locationClickEvent)}>
      <div className="overlay"/>
      <div className="preview-name"> { name } </div>
    </div>
  );
}

export default Location;
