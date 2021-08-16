import React, { Component } from 'react';
import './Home.css';

class About extends Component {

    componentDidMount() {
        window.scroll(0, 0);
    }


    render() {
        return (
            <section className="about">
                <meta
                    name="description"
                    content="Spike STINGER deploys by shooting a foldable highly resistant spike strip across 5 meters "
                />
                <meta
                    name="keywords"
                    content="spike stinger, spike stinger international"
                />
                <title>Sobre Spike Stinger</title>
                <div className="card-story">
                    <h2 className="subtitle">About Spike Stinger</h2>
                    <iframe src="https://www.youtube.com/embed/uynJBZKM744" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br />
                    <br />
                    <div className="story">
                        <p>
                            At Spike STINGER International, we aim to secure the life of every law-enforcement official around the world, by finishing a vehicle pursuit in the safest possible way… even for those being chased. To achieve this, our team is carrying on constant research and development to improve every individual aspect regarding our technologies. We have set the bar high, and we are setting it higher by the day.</p>
                        <p>
                            After thorough research and extensive testing, the Spike STINGER was born at the <a style={{ textDecoration: "underline" }} href="https://technicsproduction.nl/T&P-campus" target="_blank" rel="noreferrer">TP Campus</a>. It immediately began providing equipment to domestic and foreign organizations. It partnered up with distributors around the world, and was called to register as an official military provider for several countries. </p>
                        <p>
                            The development of its devices took almost 7 years and a constant finetuning in close cooperation with the end users. This has allowed us to communicate effectively with those who are actually in the line of duty. Their feedback and suggestions are always considered and have helped us to make better products.</p>
                        <p>
                            If you want to see our devices or simply get to know us, feel free to schedule a meeting or video conference <strong>here</strong>.
                        </p>
                        <br />
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <a href="/contact" rel="noopener noreferrer">
                                <button className="btn_yellow">Contact us</button>
                            </a>
                        </div>
                    </div>
                    <br />

                </div>
            </section>
        );
    }
}

export default About;