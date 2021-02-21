import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faMapMarked} from '@fortawesome/free-solid-svg-icons'

const logo ="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/Transparency%20Spike%20STINGER.png?alt=media&token=4a04421f-8d0d-4147-94de-398cdb78a0f1"




class Footer extends Component {

    render() {
        return (
            <section className="footer">
                <div className="footer-box">
                    <div className="box_logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div>
                        <br/>
                        <br/>
                        <h3>Contact</h3>
                        <br/>
                 
                        <a href="tel:31403033781" aria-label="Mail" rel="noopener noreferrer">
                            <span> <FontAwesomeIcon style={{ marginRight:"12px"}} icon={faPhone} />  </span> +31 40 303 3781 
                        </a>

                        <br/>
                        <br/>
                        <a href="mailto:contact@spikestinger.com" aria-label="Mail" rel="noopener noreferrer">
                            <span > <FontAwesomeIcon style={{ marginRight:"12px"}} icon={faEnvelope} />  </span>  contact@spikestinger.com

                        </a>
                        <br/>
                        <br/>
                        <a href="https://goo.gl/maps/Br5a2k8B1uYvoMSN8" target="_blank" aria-label="Mail" rel="noopener noreferrer">
                            
                            <span> <FontAwesomeIcon  style={{ marginRight:"12px"}}  icon={faMapMarked} /> </span> Spike STINGER, Tongelre, <br/>
                            <span> <FontAwesomeIcon style={{opacity:"0", marginRight:"12px"}} icon={faMapMarked} />  </span>5641 KA Eindhoven<br/>
                            <span> <FontAwesomeIcon style={{opacity:"0",  marginRight:"12px"}} icon={faMapMarked} />  </span> The Netherlands

                        </a>

                    </div>
                    <div className="social">
                    <br/>
                        <br/>
                        <h3>Social media</h3>
                        <br/>
                        <a href="https://www.linkedin.com/company/spikestinger/" target="_blank" rel="noopener noreferrer">
                            <span> <FontAwesomeIcon icon={faLinkedin} /></span>
                        </a>
                        <a href="https://www.youtube.com/channel/UC_lemFDtfEF_3R5aypK5VAg?fbclid=IwAR3MqZ-lF0j8-19SRuVs6iYGEdyu1Xsune4HOzeC71DIfZTAhiZ3_vA9GQw" target="_blank" rel="noopener noreferrer">
                            <span> <FontAwesomeIcon icon={faYoutube} /></span>
                        </a>                    
                    </div>
                </div>

                <hr className="divider"/>
                <div className="copy">


                <p>Copyright 2020 © All Right Reserved</p>
                </div>
            </section>
        );
    }
}

export default Footer;