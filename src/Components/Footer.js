import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faMapMarked } from '@fortawesome/free-solid-svg-icons'

const logo = "https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/17.png?alt=media&token=ec59f16b-9d79-421e-8d0c-6f05a5d88e6a"

class Footer extends Component {

    render() {
        return (
            <section className="footer">
                <div className="footer-box">
                    <div className="box_logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <br />
                        <br />
                        <h3>Contact</h3>
                        <br />

                        <a href="tel:+31403033781" aria-label="Mail" rel="noopener noreferrer">
                            <span> <FontAwesomeIcon style={{ marginRight: "12px" }} icon={faPhone} />  </span> +31 40 303 3781
                        </a>

                        <br />
                        <br />
                        <a href="mailto:contact@spikestingerinternational.com" aria-label="Mail" rel="noopener noreferrer">
                            <span > <FontAwesomeIcon style={{ marginRight: "12px" }} icon={faEnvelope} />  </span>  contact@spikestingerinternational.com

                        </a>
                        <br />
                        <br />
                        <a href="https://goo.gl/maps/Br5a2k8B1uYvoMSN8" target="_blank" aria-label="Mail" rel="noopener noreferrer">

                            <span> <FontAwesomeIcon style={{ marginRight: "12px" }} icon={faMapMarked} /> </span> TP Campus, Urkhovenseweg 17, <br />
                            <span> <FontAwesomeIcon style={{ opacity: "0", marginRight: "12px" }} icon={faMapMarked} />  </span>5641 KA Eindhoven<br />
                            <span> <FontAwesomeIcon style={{ opacity: "0", marginRight: "12px" }} icon={faMapMarked} />  </span> The Netherlands

                        </a>

                    </div>
                    <div className="social">
                        <br />
                        <br />
                        <h3>Social media</h3>
                        <br />
                        <a href="https://bit.ly/2M99gE6" target="_blank" rel="noopener noreferrer">
                            <span> <FontAwesomeIcon icon={faLinkedin} /></span>
                        </a>
                        <a href="http://bit.ly/3pJ1SwN" target="_blank" rel="noopener noreferrer">
                            <span> <FontAwesomeIcon icon={faYoutube} /></span>
                        </a>
                    </div>
                </div>

                <hr className="divider" />
                <div className="copy">


                    <p>Copyright 2020 © All Right Reserved</p>
                </div>
            </section>
        );
    }
}

export default Footer;