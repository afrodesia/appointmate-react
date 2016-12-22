import React, { Component } from 'react'
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'

import Appointment from './components/Appointment/Appointment'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />

          <Appointment />

          <Footer />
      </div>
    );
  }
}

export default App
