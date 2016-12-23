import React, { Component } from 'react'
import logo from './appoint-icon.svg'
import './header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
      	<header className="container">
	      	<img src={logo} className="logo" alt="logo" width="30" height="30" />
	        <h1>appoint<span className="orange">mate</span></h1>
          
        </header>
      </div>
    );
  }
}

export default Header