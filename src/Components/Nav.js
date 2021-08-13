import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEllipsisV, faTimes } from '@fortawesome/free-solid-svg-icons'
import "./Nav.css";

const spike = "https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/1.png?alt=media&token=6030a378-65a0-451d-b0a6-e7182ea8d867"

class Nav extends Component {


    render() {
        return (
            <section className="navbar">
                <Link to="/">
                    <img src={spike} alt="logo-spike" />
                </Link>
                <div className="nav-media">
                    <Link to="/about-us">
                        <h3>About us</h3>
                    </Link>
                    <Link to="/specs">
                        <h3>Specs</h3>
                    </Link>
                    <Link to="/setup">
                        <h3>Fixed Setup</h3>
                    </Link>
                    <Link to="/news">
                        <h3>News</h3>
                    </Link>
                    <Link to="/spike-stinger-academy">
                        <h3>Events</h3>
                    </Link>
                    <Link to="/contact">
                        <h3>Contact</h3>
                    </Link>
                </div>
                <div className="mobile-nav">
                    <FontAwesomeIcon style={{ marginRight: "12px" }} icon={faEllipsisV} />
                    <div className="menu-drop">
                        <p>
                            <FontAwesomeIcon style={{ marginRight: "12px" }} icon={faTimes} />

                        </p>
                        <br />
                        <Link to="/about-us">
                            <h3>About us</h3>
                        </Link>
                        <Link to="/specs">
                            <h3>Specs</h3>
                        </Link>
                        <Link to="/setup">
                            <h3>Fixed Setup</h3>
                        </Link>
                        <Link to="/news">
                            <h3>News</h3>
                        </Link>
                        <Link to="/spike-stinger-academy">
                            <h3>Events</h3>
                        </Link>
                        <Link to="/contact">
                            <h3>Contact</h3>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Nav;