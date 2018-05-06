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
    setTimeout(() => {
      this.setState(() => {
        return {
          selectedLocation: this.props.selectedLocation,
          viewer: window.pannellum.viewer('panorama', {
            autoLoad: true,
            panorama: require(`../assets/vr-shots/${this.props.selectedLocation.vrImgName}.jpg`),
            type: "equirectangular"
          })
        }
      });
    }, 500);
  }

  public componentDidUpdate(prevProps: IProps, prevState: IState): IState {
    this.state.viewer.destroy();

    return {
      selectedLocation: this.props.selectedLocation,
      viewer: window.pannellum.viewer('panorama', {
        autoLoad: true,
        panorama: require(`../assets/vr-shots/${this.props.selectedLocation.vrImgName}.jpg`),
        preview: require(`../assets/preview/${this.props.selectedLocation.vrImgName}.jpg`),
        type: "equirectangular"
      })
    }
  }

  public goBack(): void {
    this.props.backEvent();
  }

  public render() {
    return (
      <div>
        {/* <span className="title"> { this.props.selectedLocation.name } </span> */}
        <button className="back-button" onClick={this.goBack}> Back </button>
        <div id="panorama"/>
      </div>
    );
  }
}

export default Panorama;
