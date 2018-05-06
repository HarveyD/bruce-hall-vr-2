import * as React from 'react';
import './Navbar.css';

interface IProps {
  locationTitle: string;
  goBack(): void;
}

class Navbar extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);

    this.goBackEvent = this.goBackEvent.bind(this);
  }

  public goBackEvent(): void {
    this.props.goBack();
  }

  public render() {
    return (
      <div className="navbar">
        <div className="title"> { this.props.locationTitle ? this.props.locationTitle : 'Bruce Hall VR Tour' } </div>
        {
          this.props.locationTitle &&
          <button className="back-button" onClick={ this.goBackEvent }> Back </button>
        }
      </div>
    );
  }
}

export default Navbar;
