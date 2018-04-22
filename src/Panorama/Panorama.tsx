import * as React from 'react';
import { ILocationDetails } from '../Location/Location';

import './Panorama.css';

declare var window: any;

interface IProps {
  selectedLocation: ILocationDetails;
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
          autoLoad: true,
          panorama: this.props.selectedLocation.imgUrl,
          type: "equirectangular"
        })
      }
    });
  }

  public componentDidUpdate(prevProps: IProps, prevState: IState): IState {
    this.state.viewer.destroy();

    return {
      selectedLocation: this.props.selectedLocation,
      viewer: window.pannellum.viewer('panorama', {
        autoLoad: true,
        panorama: this.props.selectedLocation.imgUrl,
        type: "equirectangular"
      })
    }
  }

  public goBack(): void {
    // tslint:disable-next-line:no-console
    console.log('goback');
  }

  public render() {
    return (
      <div id="panorama">
        <button onClick={this.goBack}> Go back</button>
      </div>
    );
  }
}

export default Panorama;
