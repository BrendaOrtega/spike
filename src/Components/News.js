import React, { Component } from 'react';
import './Home.css';

class News extends Component {

    componentDidMount() {
        window.scroll(0, 0);
    }


    render() {
        return (
            <section className="news">
                <h2 className="subtitle">News</h2>
                <p>
                    Find our latest publications and press releases here:
                </p>

                <div className="box-post">
                    <a href="https://www.linkedin.com/pulse/motorcycle-run-flat-stopped-spike-stinger-technicsproduction/?trackingId=J6ZB8oS6nc1nbqTWPW4wbA%3D%3D" target="blank">
                        <div className="card-post">
                            <h3>Motorcycle and Run-Flat stopped by Spike Stinger</h3>
                            <p>The Spike Stinger can perform over and over again at a super speed, thanks to its new mat and spikes. </p>
                            <br />
                            <img src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/Spikes.png?alt=media&token=07c32125-a949-4849-9701-1edadb7e2858" alt="news img" />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:6810136843213004800/" target="blank">
                        <div className="card-post">
                            <h3>Working outdoors and enjoying the sunny days</h3>
                            <p>Would you like to have not only the financial means but the expertise and network necessary to grow your ideas into an actual business?</p>
                            <img src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/Motor2.png?alt=media&token=2b7140a3-13bb-4e02-82df-b434d7c400bd" alt="news img" />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:6762409358551846912/" target="blank">
                        <div className="card-post">
                            <h3>Do you smell what T&P is cooking? </h3>
                            <p>Do you smell what T&P is cooking? Working on one of the 100 most revolutionary ideas we received at the T&P Campus. </p>
                            <br />
                            <br />
                            <img src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/Motor.png?alt=media&token=a783cad6-8715-449d-a93b-50189d4e07cf" alt="news img" />
                        </div>
                    </a>

                </div>


            </section>
        );
    }
}

export default News;