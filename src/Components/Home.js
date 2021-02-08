import React, { Component } from 'react';
import video from "../assets/video.mp4"
import "./Home.css"

class Home extends Component {
    componentDidMount() {
        window.scroll(0, 0);
      }

    render() {
        
        return (
            <section>
                <meta property="og:url"                content="" />
                <meta property="og:type"               content="website" />
                <meta property="og:title"              content="Spike Stinger" />
                <meta property="og:description"        content="Spike STINGER deploys by shooting a foldable highly resistant spike strip across 5 meters (16.4 ft) in less than a second" />
                <meta property="og:image"              content="" />
                <meta name="Description" content=""/>
                <title>Spike Stinger</title>
                <section>
                    <div className="figure">
                        <div>
                            <h1>SPIKE STINGER</h1>
                            <p>Making use of basic principles, and cutting edge software, the Spike STINGER deploys by shooting a foldable highly resistant spike strip across 5 meters (16.4 ft) in less than a second</p>
                            <br/>
                            <br/>
                            <button  className="btn-white">Contactar</button>
                        </div>
                    </div>

                    <video autoPlay loop id="myVideo">
                        <source src={video} type="video/mp4"/>
                    </video>
                </section>
            </section>
        );
    }
}

export default Home;