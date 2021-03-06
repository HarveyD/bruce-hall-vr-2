import * as React from "react";
import "./Location.css";
import { LocationDetail } from "./LocationDetail";

interface IProps {
  visible: boolean;
  locationDetail: LocationDetail;
  handleClick(locationName: LocationDetail): void;
}

const Location: React.StatelessComponent<IProps> = (props: IProps) => {
  const locationClickEvent = (): void => {
    props.handleClick(props.locationDetail);
  };

  const getPosition = (): string => {
    return props.visible ? "" : props.locationDetail.animationDirection;
  };

  const { name } = props.locationDetail;

  return (
    <div
      style={{
        backgroundImage: `url(${props.locationDetail.previewImageUrl})`
      }}
      className={`location ${getPosition()}`}
      onClick={locationClickEvent}
    >
      <div className="overlay" />
      <div className="preview-name"> {name} </div>
    </div>
  );
};

export default Location;
