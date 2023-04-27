import React, { Component } from 'react';
import Footer from './Components/Footer';
import Routes from './Routes';
import Nav from "./Components/Nav";
import { Modal } from 'antd'
import { Link } from "react-router-dom"



const img = "https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/spike-stinger-Hondekop%20transparante%20achtergrond.png?alt=media&token=b3f99373-ed5f-4906-ba48-88b0aca7b445"

class App extends Component {
  state = { isPlaying: false, visible: true }

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <div>
        {/* <Modal onCancel={() => {
          // this.video.play()
          this.setState({ isPlaying: true, visible: false })
        }} footer={null} title="Welcome to Spike Stinger!" visible={this.state.visible} >
          <div className="modal-info">
            <img className="modal-img" src={img} alt="spike logo" />
            <p>If you are a member of our partner organizations, law enforcement agent or member of a military organization, you can request an invitation to our yearly Spike Stinger Academy. If you want to know more, please
              <Link to="/spike-stinger-academy"> <b>Click here</b>
              </Link></p>
          </div>
        </Modal> */}
        <Nav />
        <Routes />
        <Footer />

      </div>
    )
  }
}

export default App;
