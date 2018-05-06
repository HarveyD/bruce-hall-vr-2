import * as React from 'react';
import { ILocationDetails } from '../Location/Location';

import './Panorama.css';

declare var window: any;

interface IProps {
  selectedLocation: ILocationDetails;
  backEvent(): void;
}

interface IState {
  selectedLocation: ILocationDetails;
  viewer: any;
}

class Panorama extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }

  public componentDidMount(): void {
    this.setState(() => {
      return {
        selectedLocation: this.props.selectedLocation,
        viewer: window.pannellum.viewer('panorama', {
          autoLoad: false,
          panorama: require(`../assets/vr-shots/${this.props.selectedLocation.vrImgName}.jpg`),
          preview: require(`../assets/preview/${this.props.selectedLocation.vrImgName}.jpg`),
          type: "equirectangular"
        })
      }
    });
  }

  public goBack(): void {
    this.props.backEvent();
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
