import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Specs extends Component {

    componentDidMount() {
        window.scroll(0, 0);
    }


    render() {
        return (
            <section className="specs">
                <div>
                    <h2 className="subtitle">The exclusive capacities of the Spike STINGER </h2>
                    <div className="specs-box">
                        <div className="specs-img">
                        </div>
                        <div>
                            <p><FontAwesomeIcon style={{ marginRight: "12px", fontSize: "20px", color: "#BF2F35" }} icon={faCheckCircle} />Automatic Self Calibration</p>
                            <p><FontAwesomeIcon style={{ marginRight: "12px", fontSize: "20px", color: "#BF2F35" }} icon={faCheckCircle} />Pairing (simultaneous extension and retraction of 2 or more units with one single remote control)</p>
                            <p><FontAwesomeIcon style={{ marginRight: "12px", fontSize: "20px", color: "#BF2F35" }} icon={faCheckCircle} />SMART RECorder by Technics Production B.V. GPS tracking and recording (know exactly where and when the device was deployed)</p>
                            <p><FontAwesomeIcon style={{ marginRight: "12px", fontSize: "20px", color: "#BF2F35" }} icon={faCheckCircle} />LCD display with diagnosing data on the remote controller</p>
                            <p><FontAwesomeIcon style={{ marginRight: "12px", fontSize: "20px", color: "#BF2F35" }} icon={faCheckCircle} />Fastest extension time (1 second or less)</p>
                            <p><FontAwesomeIcon style={{ marginRight: "12px", fontSize: "20px", color: "#BF2F35" }} icon={faCheckCircle} />Fastest recovery time (once you have extended and retracted it, you can repeat the procedure within 3 seconds)</p>
                            <p><FontAwesomeIcon style={{ marginRight: "12px", fontSize: "20px", color: "#BF2F35" }} icon={faCheckCircle} />Fastest deflation time (needle-like spikes ensure deflation within a couple of seconds or less than 100 meters)</p>
                            <p><FontAwesomeIcon style={{ marginRight: "12px", fontSize: "20px", color: "#BF2F35" }} icon={faCheckCircle} />Most deployments on a full battery (while other devices have a cap of 24 repetitions, the Spike STINGER surpasses that amount easily by removing caps and notifying you when the battery must be charged)</p>
                            <p><FontAwesomeIcon style={{ marginRight: "12px", fontSize: "20px", color: "#BF2F35" }} icon={faCheckCircle} />Capacity to deploy while charging (it is ideal for express and fixed checkpoints since you can extend and retract the mat for an unlimited amount of times, while it is plugged into a power source which could be a conventional plug or even your car)</p>
                            <p><FontAwesomeIcon style={{ marginRight: "12px", fontSize: "20px", color: "#BF2F35" }} icon={faCheckCircle} />Capacity to charge from a vehicle (if by any chance your 6 months standby charge runs out, you can quickly charge it from your vehicle within seconds, and have it ready for use)</p>
                            <p><FontAwesomeIcon style={{ marginRight: "12px", fontSize: "20px", color: "#BF2F35" }} icon={faCheckCircle} />Easiest to transport (not-wobbly, nor exposing spikes, compact, light, and extremely discreet in its box)</p>
                            <p><FontAwesomeIcon style={{ marginRight: "12px", fontSize: "20px", color: "#BF2F35" }} icon={faCheckCircle} />Easiest to store (extremely compact, safe and overall ideal box shape for storage anywhere)</p>
                            <p><FontAwesomeIcon style={{ marginRight: "12px", fontSize: "20px", color: "#BF2F35" }} icon={faCheckCircle} />Easiest to maintain (never has maintenance be so easy, fast, and unnecessary)</p>
                            <p><FontAwesomeIcon style={{ marginRight: "12px", fontSize: "20px", color: "#BF2F35" }} icon={faCheckCircle} />Best customer support (experts are just one call away)</p>
                            <p><FontAwesomeIcon style={{ marginRight: "12px", fontSize: "20px", color: "#BF2F35" }} icon={faCheckCircle} />Best warranty coverage (every component, fully covered for 500 deployments or two full years)</p>
                            <p><FontAwesomeIcon style={{ marginRight: "12px", fontSize: "20px", color: "#BF2F35" }} icon={faCheckCircle} />Lowest cost per car deflated (stop spending unnecessary amounts of money on disposable devices/components)</p>
                        </div>
                    </div>

                </div>

                <hr className="line" />
                <br />
                {/* <br /> */}
                {/* <br /> */}
                <div>
                    {/* <h3 className="subtitle">Specs</h3> */}

                    <p>
                        Custom-made alloys, in-house developed software and mechanics allow the Spike STINGER to endure the toughest conditions, over and over again. Organizations are no longer forced to buy spare parts, or even purchase complete replacements continuously. The Spike STINGER users are able to save a considerable amount of financial resources in a medium and long term budget.
                    </p>
                    <p>
                        The Spike STINGER can be activated and monitored through its Remote Control, from a safe distance of 100 meters (328.08 ft). Notifications about the status and operational capacities of the Spike Stringer are shown in the remote’s display.
                    </p>
                    <p>
                        The Spike STINGER uses GPS SMART-RECorder™ technology. This allows the registration of the time and location of every deployment. The encrypted data can be retrieved solely by the owner or staff in charge of every unit.
                    </p>

                    <LazyLoadImage className='tabla' effect="blur" src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/spike.png?alt=media&token=ddea0d99-07ed-4c41-baba-67bda20d2efb" alt='comaprative table' />

                    {/* <div className="products-box">
                        <div className="product-card">
                            <h3>Rust-Free, Harden Metal Body</h3>
                            <ul>
                                <li>Length: 835 mm (32.87 in)</li>
                                <li>Width: 460 mm (18.11 in)</li>
                                <li>Height: 115 mm (4.52 in)</li>
                                <li>Weight: 23 kg (50.07 lbs)</li>
                            </ul>
                        </div>
                        <div className="product-card">
                            <h3>Reinforced Spike Strip/Mat</h3>
                            <br />
                            <ul>
                                <li>Reach: 5.5 m (18.04 ft)</li>
                                <li>Spike Height: 5 cm (1.97 in)</li>
                                <li>120 spikes (10 spikes per line)</li>
                            </ul>
                        </div>
                        <div className="product-card">
                            <h3>Remote Control</h3>
                            <br />
                            <ul>
                                <li>Reach: up to 100 m (328.08 ft)</li>
                                <li>Water/Dust resistant class: IP53</li>
                                <li>Com speed: 57600 bps</li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="cta">
                        <a href="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/Specs%20SSI%202.pdf?alt=media&token=165eae91-a4a8-4a82-9d33-aea2db45fabb" target="_blank" rel="noopener noreferrer">
                            <button className="btn_yellow">Download our flat sheet </button>
                        </a>
                        <br />
                        <br />
                        <p>If you would like to request a quotation, demo, or further information about the Spike STINGER in general, do not hesitate to contact us <Link to="/contact"> <b>here</b></Link>. Our personnel will be glad to assist you.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Specs;

