import * as React from 'react';
import { ILocationDetails } from '../Location/Location';

import './Panorama.css';

declare var window: any;

interface IProps {
  selectedLocation: ILocationDetails;
}

interface IState {
  viewer: any;
}

class Panorama extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount(): void {
    this.setState(() => {
      return {
        viewer: window.pannellum.viewer('panorama', {
          autoLoad: false,
          panorama: require(`../assets/vr-shots/${this.props.selectedLocation.vrImgName}.jpg`),
          preview: require(`../assets/preview/${this.props.selectedLocation.vrImgName}.jpg`),
          type: "equirectangular"
        })
      }
    });
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
