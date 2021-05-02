import React, { Component } from 'react';
import "./Home.css"
import safe from "../assets/user-shield-solid.png"
import award from "../assets/award.png"
import vector from "../assets/Vector_1.png"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarked, faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import { Modal, Button } from 'antd'



    
const logo ="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/19_20210430_211814_0018.png?alt=media&token=fb4452df-ffcb-492b-b312-79c6508e164f"

const video = "https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/spike-intro.mp4?alt=media&token=e638820e-7e3f-4fa9-8794-9fdd1704cde8"

const img = "https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/4_20210430_211813_0003.png?alt=media&token=3807fc69-26df-408c-8a93-d7604bf91d65"

class Home extends Component {

    state = { isPlaying:false, visible:true }
    
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
                <section className="video-box">
                    <Modal onCancel={()=>{
                        this.video.play()
                        this.setState({isPlaying:true, visible:false})
                    }} footer={null} title="Welcome to Spike Stinger!" visible={this.state.visible} >
                        <div className="modal-info">
                            <img className="modal-img" src={img}/>
                            <p>Do you want to know all the advantages of using spike stinger? <strong>Call us</strong> </p>
                        </div>
                    </Modal>
                    <div className="cover">
                        <div className="nav-media">
                            <a href="tel:+31403033781" aria-label="Mail" rel="noopener noreferrer">
                                <div>
                                    <span> <FontAwesomeIcon style={{ marginRight:"12px"}} icon={faPhone} />  </span> <span className="none">+31 40 303 3781 </span>
                                </div>
                            </a>
                            <a href="mailto:contact@spikestingerinternational.com" aria-label="Mail" rel="noopener noreferrer">
                        
                            <div>
                            <span > <FontAwesomeIcon style={{ marginRight:"12px"}} icon={faEnvelope} />  </span> <span className="none">contact@spikestingerinternational.com</span>
                            </div>
                            </a>
                        </div>
                        <div className="figure">
                            <div>
                                <img className="st-logo" src={logo} alt="logo"/>
                                <h1>SPIKE STINGER</h1>
                                <p>Making use of basic principles, and cutting edge software, the Spike STINGER deploys by shooting a foldable highly resistant spike strip across 5 meters (16.4 ft) in less than a second</p>
                                <br/>
                                <br/>
                                
                                <a href="#contact">
                                    <button  className="btn_yellow">Contact us</button>
                                </a>
                            </div>
                        </div>
                
                        <video ref={v=>this.video=v} loop id="myVideo" title="products">
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                </section>
                <section className="benefits">
                    <div className="box-info">
                        <h2>The advantages of the Spike STINGER</h2>
                        <p>What has positioned Spike STINGER as the #1 vehicle stopping system</p>
                        <Link to="/about-us">
                            <p><srtong className="link">Read more about Spike Stinger</srtong></p> 
                        </Link>
                    </div>
                    <div className="box-benefits">
                       <div className="card-ad">
                           <div className="circle">
                            <img src={safe} alt="img-safe"/>
                           </div>
                           <br/>
                            <h3>SAFETY</h3>
                            <p>Traditional spike stringers have been the cause of injury and even death for several law-enforcement officers. Because these spike strips are manually operated, the users are directly exposed to the vehicles driving at dangerous speeds, as well as the obvious spike stringer recoiling.</p>

                       </div>
                       <div className="card-ad">
                           <div className="circle">
                            <img style={{width:"32px"}}  src={award} alt="img-eficient"/>
                           </div>
                           <br/>
                            <h3>COST EFFICIENCY</h3>
                            <p>Traditional vehicle stop systems and tools become useless and must be replaced for new ones, once a vehicle has driven over it. The materials are easily bent, some of its components are broken, and some others have even caught fire. In the quest for the sturdiest and most efficient materials, the Spike STINGER lab managed to eradicate these characteristics through a long series of testing.</p>

                       </div>
                       <div className="card-ad">
                           <div className="circle">
                            <img src={vector} alt="img-spike"/>
                           </div>
                           <br/>
                            <h3>Spike-OP Program</h3>
                            <p>One of the main advantages of the Spike STINGER is not only safety for those directly operating the device. The overall dynamics to approach tactical operations could change. Safer and more effective operations could take place in different scenarios. These are ranging from border security, checkup points, anti-terrorism operations, facility safekeeping, among others.</p>

                       </div>
                    </div>
                   
                </section>
                {/* <section className="nom">
                    <img className="logo_img" src={logo} alt="logo"/>
                    <br/>
                    <br/>
                    <h2>The NATO Model</h2>
                    <p>The Spike STINGER was developed using the needs and quality standards of the NATO (North Atlantic Treaty Organization) countries, as its foundation.
                        <br/>           <br/>
                        Foreseeing its constant usage, the Spike STINGER can be endlessly activated, while connected to a 110-220 V power source. However, it can also be autonomously transported and deployed for as many as 24 times, before it needs to be recharged. This can be done from a conventional power outlet, but it can also be plugged into a standard car battery.
                        <br/>           <br/>
                        The Spike STINGER has the ability to pair with other units for simultaneous deployment. This increases the reach of the spike strip, when closing more than one lane, or even an entire section with one single action.
                        <br/>           <br/>
                        The remote control uses SMART RECorder technology, exclusively developed for this device by Technics Production B.V.. The Spike STINGER has been equipped with a GPS unit. This allows the registration of the time and location of every deployment. The encrypted data can be retrieved sonely by the owner or staff in charge of every unit.
                        <br/>           <br/>
                        NATO Stock Number (NSN): 4240-17-127-0850</p>
                </section> */}
                <section id="contact" className="contacto">
                    <div className="contact_descript">
                        <h2>The safest way to stop a vehicle</h2>
                        <p>Making use of basic principles, and cutting edge software, the Spike STINGER deploys by shooting a foldable highly resistant spike strip across 5 meters (16.4 ft) in less than a second (depending on the weather/ground conditions). Then, once the vehicle to be stopped has come in touch with the Spike STINGER, the strip goes back to its case in just the same time. This can be safely activated at the distance thanks to its remote control.</p>
                        <p>The Spike STINGER has been operating effectively in several different scenarios. From uneven or unstable grounds to extreme weather conditions; the Spike STINGER was able to stop different kinds of vehicles. These ranged from motorcycles to trailers.</p>
                    </div>
                    <div>
                        <h2>Contact us</h2>
                        <p>We will get in touch with you as soon as possible.</p>
                        <form>
                                <input className="input" type="text" placeholder="Name" name="name" />
                                <input className="input" type="text" placeholder="Phone" name="tel" />
                                <textarea className="txtarea" type="text" placeholder="Message" name="message" />
                                <button className="btn_yellow">Submit</button>

                        </form>
                    </div>
                </section>
            </section>
        );
    }
}

export default Home;