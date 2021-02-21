import React, { Component } from 'react';
import './Home.css';
import { Timeline } from 'antd';
import {Link} from "react-router-dom"

const logo = "https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/logo-spike.png?alt=media&token=aafe4755-7c1a-492f-b86d-c7711c0aa868"

class About extends Component {

    componentDidMount() {
        window.scroll(0, 0);
      }


    render() {
        return (
            <section className="about">
                <div className="card-story">
                    <Link to="/">   
                        <img className="bg-logo" src={logo} alt="logo"/>
                    </Link>
                    <br/>
                    <br/>
                    <div className="story">
                        <p>
                        The <strong>Spike STINGER </strong> was born and developed at <strong>Technics Production B.V.</strong>, in response to several accidents related to the deployment or retraction of Tire Deflation Devices taking place all around the world. We are the only company worldwide able to make/manufacture and distribute this safe and convenient remotely operated device.
                        </p>
                        <p>
                        The <strong>Spike STINGER </strong>  keeps not only the officer safe (easy and safe to transport, setup, deploy, retract and pack it back up), but the fleeing driver (controlled deflation of tires in-line, scene preparation for detention of the suspect), and even the public who may be around the action (no flying devices or pieces of it, controlled area through tactical display, in-line deflation, small and discrete device fully guarded/covered). It deflates the tires of a vehicle (from scooters to 7.5 tons trailer trucks) regardless of the surface (sand, grabble, frozen/wet/snowy/flooded roads, etc.) or climatic circumstances (it has been operated in the range of -10F to 122F). After barely a few seconds, vehicles stop once they have been in touch with our spike mat, keeping the spikes inserted in the tires and releasing all air, not being able to drive more than 110 yards. The Spike STINGER is practical and highly effective, placing safety as its highest priority.
                        </p>
                        <p>
                        Technics Production B.V. has been the sole producer of the Spike STINGER since its birth. Although some components are traditionally used in other industries, the software remains the key element of this device. Technics Production B.V. proudly created this software and keeps it under constant fine tuning. Seeking for growth, Technics Production B.V. has collaborated with different entities for retailing its products. Hence, its top device (the Spike STINGER) adopted different names throughout time. However, thanks to the success of our products in the field and direct requests from law-enforcement organizations around the world, we are now able to avoid third parties (decreasing costs and carrying on quicker improvements or customizations for every user). We are now collaborating directly with state organizations, which gives us the advantage of keeping direct close contact with them. We use their feedback to understand their needs and offer them better products and services, in the most efficient way. We are doing everything in-house from manufacturing, R&D, retailing, all the way to delivery. This has allowed us to ensure the delivery of the quality we stand for, and that which our customers deserve.
                        </p>
                        <p>
                        After extensive testing by International Standards Organizations, and years of improvement based on our user’s feedback, the <strong>Spike STINGER </strong>  has positioned itself as the top device for different law-enforcement organizations around the world. These have ranked the device as the most innovative, safe and effective tool to stop fleeing vehicles. Some of them have even developed entire operations (fleeing vehicles, roadblocks, checkpoints, in/out traffic management, etc) based on their enhanced capabilities, which are exponentially improved by the Spike STINGER. Its training program, maintenance/service anywhere in the world, remote control, pairing capacities, GPS system, and software makes it a unique instrument to stop crime.
                        </p>
                        <p>
                        The most outstanding aspects of the Spike STINGER (basic specs) are:
                        </p>
                        <Timeline>
                            <Timeline.Item>Dimensions: 33.85x18.11x5.90 in</Timeline.Item>
                            <Timeline.Item>Weight: 55.11 lbs</Timeline.Item>
                            <Timeline.Item>Spike mat: 17.06 ft length, with 120 needle-spikes of 1.96 in each, at 1.96 in distance from each other</Timeline.Item>
                            <Timeline.Item>The Spike STINGER can be used until the battery is fully empty. Unlike other similar devices, there are no caps or limits before the unit can be charged. When the battery is fully charged, it is guaranteed to deploy 25 times before it must be charged again</Timeline.Item>
                            <Timeline.Item>The recovery time between deployments is between 3 to 7 seconds. Your organization will be able to use it at checkpoints without an issue, as well as to stop more than one vehicle in pursuit. The Spike STINGER has the fastest recovery time, when compared to any other device</Timeline.Item>
                            <Timeline.Item>Remote control: 110 yards reach, with LCD display for reading the status of the Spike STINGER and pairing info</Timeline.Item>
                            <Timeline.Item>Pairing capacity. Up to 10 units have been paired and successfully deployed with one click, from one single remote. It only takes 3 seconds to pair a unit to another one (or to a group of these)</Timeline.Item>
                            <Timeline.Item>Besides its outstanding battery capacities, the Spike STINGER can deploy and retract for an unlimited amount of times, whether it is plugged to a conventional power outlet (wall plug) or car adapters</Timeline.Item>
                            <Timeline.Item>The spikes of the spike STINGER are the toughest in the industry. When tested against the heaviest 7.5 ton trucks, these have proven to be unbreakable, and definitely not malleable. This makes the deflation effective and faster than with any other device</Timeline.Item>
                            <Timeline.Item>GPS tracking of every deployment and retraction with SMART RECorder Software by Technics Production B.V.</Timeline.Item>
                        </Timeline>
                        <p>
                        Custom-made alloys, in-house developed software and mechanics allow the Spike STINGER to endure the toughest conditions, over and over again (no need of expensive and disposable spare parts or even entire units). Law-enforcement officers no longer feel unsafe, and entire organizations get the recognition they deserve thanks to this great tool. The Spike STINGER users are not only able to save a considerable amount of financial resources in a medium and long term budget, but to save the lives of those protecting us, so that they can make it home safe at the end of the day.

                        </p>
                        <br/>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <a href="tel:31403033781" aria-label="Mail" rel="noopener noreferrer">
                                    <button  className="btn_yellow">Call us</button>
                                </a>
                        </div>
                    </div>
                    <br/>
                    <Link to="/">
                            <p className="link"> Back to home</p>
                        </Link>
                </div>
            </section>
        );
    }
}

export default About;