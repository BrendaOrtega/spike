import React, { Component } from 'react';
import Footer from './Components/Footer';
import Routes from './Routes'

class App extends Component {
  render() {
    return (
        <div>
          <Routes />
          <Footer/>
          </div>
    )
  }
}

export default App;
