import * as React from 'react';
import './Navbar.css';

interface IProps {
  locationTitle: string;
  goBack(): void;
}

function Navbar(props: IProps) {
  const goBackEvent = (): void => { 
    props.goBack(); 
  }

  return (
    <div className="navbar">
      <div className="title"> { props.locationTitle ? props.locationTitle : 'Bruce Hall VR Tour' } </div>
      {
        props.locationTitle &&
        <button className="back-button" onClick={ goBackEvent }> Back </button>
      }
    </div>
  );
}

export default Navbar;
