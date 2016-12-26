import React, { Component } from 'react';
import logo from './appoint-icon.svg';
// import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
      	<div className="container">
	      	<img src={logo} className="logo" alt="logo" width="30" height="30" />
	        <h1>AppointMates</h1>


        </div>
      </div>
    );
  }
}

export default Header;