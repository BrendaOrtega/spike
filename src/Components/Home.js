import React, { Component } from 'react';
import "./Home.css"
import safe from "../assets/user-shield-solid.png"
import award from "../assets/award.png"
import vector from "../assets/Vector_1.png"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Modal } from 'antd'
import { Carousel } from 'antd';

function onChange(a, b, c, d) {
    console.log(a, b, c, d);
}


const logo = "https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/22.png?alt=media&token=f4ae8122-f653-48b7-bc01-f42a16cd63d0"

const video = "https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/spike-intro.mp4?alt=media&token=e638820e-7e3f-4fa9-8794-9fdd1704cde8"

const img = "https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/8.png?alt=media&token=c44334b6-a85f-40c3-a229-7c2316f636a6"

const contentStyle = {
    height: '100vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
};

class Home extends Component {

    state = { isPlaying: false, visible: true }

    componentDidMount() {
        window.scroll(0, 0);
    }


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
                    <Modal onCancel={() => {
                        // this.video.play()
                        this.setState({ isPlaying: true, visible: false })
                    }} footer={null} title="Welcome to Spike Stinger!" visible={this.state.visible} >
                        <div className="modal-info">
                            <img className="modal-img" src={img} />
                            <p>If you are a member of our partner organizations, law enforcement agent or member of a military organization, you can request an invitation to our yearly Spike Stinger Academy. If you want to know more, please
                                <Link to="/spike-stinger-academy"> <strong>Click here</strong>
                                </Link></p>
                        </div>
                    </Modal>
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
                <section className="benefits">
                    <div className="box-info">
                        <h2>The #1 Vehicle Stopping System around the world</h2>
                        <p>The Spike STINGER is the only autonomous device able to stop any vehicle from motorcycles to trailer trucks in seconds. Its unique capacities for pairing and non-stop operation have also granted it the preference of military organizations. It can be used fixed or during mobile operations. The Spike STINGER is effectively stopping vehicles all across the globe. You can find these in every continent, excluding Antarctica.</p>
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

            </section>
        );
    }
}

export default Home;