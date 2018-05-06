import * as React from 'react';

import { LocationDetail } from '../Location/LocationDetail';
import './Panorama.css';

declare var window: any;

interface IProps {
  selectedLocation: LocationDetail;
}

class Panorama extends React.Component<IProps, {}> {
  public componentDidMount(): void {
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
