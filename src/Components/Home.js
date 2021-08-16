import React, { Component } from 'react';
import "./Home.css"
import safe from "../assets/user-shield-solid.png"
import award from "../assets/award.png"
import vector from "../assets/Vector_1.png"
import { Link } from "react-router-dom"
import { Carousel } from 'antd';

function onChange(a, b, c, d) {
    console.log(a, b, c, d);
}

class Home extends Component {

    render() {

        return (
            <section>
                <meta property="og:url" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Spike Stinger" />
                <meta property="og:description" content="Spike STINGER deploys by shooting a foldable highly resistant spike strip across 5 meters (16.4 ft) in less than a second" />
                <meta property="og:image" content="" />
                <meta name="Description" content="Spike STINGER deploys by shooting a foldable highly resistant spike strip across 5 meters" />
                <title>Spike Stinger</title>
                <section className="video-box">

                    <div className="cover">

                        <div className="box-carrusel">
                            <Carousel afterChange={onChange} autoplay={true}>
                                <div className="img1">
                                    <div className="cover">
                                        <div className="info-box">
                                            <h1>Spike Stinger</h1>
                                            <p>Making use of basic principles, and cutting edge software, the Spike STINGER shoots a foldable highly resistant spike strip across 5.2 meters (17.06 feet) in less than a second.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="img2">
                                    <div className="cover">
                                        <div className="info-box">
                                            <h1>Spike Stinger</h1>
                                            <p>Officers can operate the Spike STINGER from up to 100 meters (109.36 yards) away, thanks to its remote control.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="img3">
                                    <div className="cover">
                                        <div className="info-box">
                                            <h1>Spike Stinger</h1>
                                            <p>Whether on the move or placed on a fixed location, the unique pairing capacities of the Spike STINGER allow officers to easily and quickly activate several devices with one single remote control.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="img4">
                                    <div className="cover">
                                        <div className="info-box">
                                            <h1>Spike Stinger</h1>
                                            <p>Tested by real agents, in real vehicle chases. From motorcycles to trailer trucks have been effectively stopped by the Spike STINGER.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="img5">
                                    <div className="cover">
                                        <div className="info-box">
                                            <h1>Spike Stinger</h1>
                                            <p>RunFlats #1 enemy. With its proximity in between spikes, even runflats are no challenge for the Spike STINGER.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>

                    </div>
                </section>
                <section className="home-iframe">
                    <h2 className="subtitle">The #1 Vehicle Stopping System around the world</h2>
                    <p>The Spike STINGER is the only autonomous device able to stop any vehicle from motorcycles to trailer trucks in seconds. Its unique capacities for pairing and non-stop operation have also granted it the preference of military organizations. It can be used fixed or during mobile operations. The Spike STINGER is effectively stopping vehicles all across the globe. You can find these in every continent, excluding Antarctica.</p>
                    <iframe className="home-video" src="https://www.youtube.com/embed/VvFkUjLvIRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </section>
                <section className="benefits">
                    <div className="box-info">
                        <h2>The Vehicle Stopping System around the world</h2>
                        <Link to="/about-us">
                            <p><srtong className="link">What is Spike Stinger</srtong></p>
                        </Link>
                    </div>
                    <div className="box-benefits">
                        <div className="card-ad">
                            <div className="circle">
                                <img src={safe} alt="img-safe" />
                            </div>
                            <br />
                            <h3>SAFETY</h3>
                            <p>Conventional spike stringers have been highly controversial. These are needed to stop vehicles but have also increased the numbers of injuries or even death among law enforcement officers and suspects. Because these spike strips are manually operated, the users are directly exposed to the vehicles driving at dangerous speeds, as well as the obvious spike stringer recoiling. The Spike STINGER avoids all risks thanks to its remote operation capacities and its online controlled deflation mechanism. The suspect vehicles are stopped in the safest possible way, while there is no need for more than one operator to deploy as many as 10 units simultaneously. It is all done from a safe distance or location.</p>
                            <br />


                        </div>
                        <div className="card-ad">
                            <div className="circle">
                                <img style={{ width: "32px" }} src={award} alt="img-eficient" />
                            </div>
                            <br />
                            <h3>COST EFFICIENCY</h3>
                            <p>Traditional vehicle stop systems and tools become useless and must be replaced for new ones, once vehicles have driven over them a couple of times tops. The materials are easily bent, some of its components are broken, and some others have even caught fire due to friction. In the quest for the sturdiest and most efficient materials, the Spike STINGER lab managed to eradicate these issues. Therefore, we can assure the lowest cost per vehicle stopped and warranty our units for 500 extensions or 2 years in constant usage.</p>
                            <br />

                        </div>
                        <div className="card-ad">
                            <div className="circle">
                                <img src={vector} alt="img-spike" />
                            </div>
                            <h3>Spike-OP Program</h3>
                            <p>One of the main advantages of the Spike STINGER is not only safety for those directly operating the device. The device is a game changer for the overall dynamics or approach to tactical operations. Safer and more effective actions can now take place in different scenarios. These are ranging from border security, checkup points, anti-terrorism operations, facility safekeeping, among others.
                            </p>
                            <p>
                                Together with the Spike STINGER Academy, Spike-OP is a program developed to keep agents up to date. At no extra cost, our personnel can visit your facilities and offer a series of workshops for your own trainers, engineers and/or tactical units.
                            </p>
                            <br />

                        </div>


                    </div>

                </section>

            </section >
        );
    }
}

export default Home;