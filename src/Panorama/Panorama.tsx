import * as React from "react";

import Constants from "src/constants";

import { LocationDetail } from "../Location/LocationDetail";
import "./Panorama.css";

declare var window: any;

interface IProps {
  selectedLocation: LocationDetail;
}

interface IState {
  viewer: any;
}

class Panorama extends React.Component<IProps, IState> {
  public componentDidMount(): void {
    this.setState({
      viewer: window.pannellum.viewer(Constants.PanoramaId, {
        autoLoad: false,
        panorama: this.props.selectedLocation.vrImageUrl,
        preview: this.props.selectedLocation.previewImageUrl,
        type: Constants.PanoramaType
      })
    });
  }

  public componentDidUpdate(prevProps: IProps, prevState: IState) {
    // If the change in state is from going back we don't want to recreate the panorama
    if (Object.keys(prevProps.selectedLocation).length > 0) {
      return;
    }

    this.state.viewer.destroy();

    window.pannellum.viewer(Constants.PanoramaId, {
      autoLoad: false,
      panorama: this.props.selectedLocation.vrImageUrl,
      preview: this.props.selectedLocation.previewImageUrl,
      type: Constants.PanoramaType
    });
  }

  public render() {
    return (
      <React.Fragment>
        <div id={Constants.PanoramaId} />
      </React.Fragment>
    );
  }
}

export default Panorama;
