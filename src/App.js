import React, { Component } from 'react';
import Footer from './Components/Footer';
import Routes from './Routes';
import Nav from "./Components/Nav";

class App extends Component {
  render() {
    return (
        <div>
          <Nav/>
          <Routes />
          <Footer/>
          </div>
    )
  }
}

export default App;
