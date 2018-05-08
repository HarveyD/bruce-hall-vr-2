import * as React from 'react';

import { LocationDetail } from '../Location/LocationDetail';
import './Panorama.css';

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
      viewer: window.pannellum.viewer('panorama', {
        autoLoad: false,
        panorama: this.props.selectedLocation.vrImageUrl,
        preview: this.props.selectedLocation.previewImageUrl,
        type: "equirectangular"
      })
    });
  }

  public componentDidUpdate(prevProps: IProps, prevState: IState) {
    // If the change in state is from going back we don't want to recreate the panorama
    if (Object.keys(prevProps.selectedLocation).length > 0) {
      return;
    }

    this.state.viewer.destroy();

    window.pannellum.viewer('panorama', {
      autoLoad: false,
      panorama: this.props.selectedLocation.vrImageUrl,
      preview: this.props.selectedLocation.previewImageUrl,
      type: "equirectangular"
    })
  }

  public render() {
    return (
      <div>
        <div id="panorama"/>
      </div>
    );
  }
}

export default Panorama;
