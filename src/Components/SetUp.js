import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom"


class SetUp extends Component {

    componentDidMount() {
        window.scroll(0, 0);
    }


    render() {
        return (
            <section className="setup">
                <h2 className="subtitle">Fixed Setup</h2>
                <div className="setup-box">
                    <div className="setup-img">

                    </div>
                    <div className="setup-info">
                        <p>
                            Alongside electronic bars, swinging doors or electric gates are often installed with the intention of stopping unauthorised entries. However, these are easy to overcome with the smallest effort of driving through, even when they are closed.                    </p>
                        <p>
                            This is why combining electronic access control systems with physical security solutions has become increasingly popular. Although some have opted for lethal force barriers, which stop a vehicle costing the life of the driver, some others go for less effective but life-friendly solutions.
                        </p>
                        <p>
                            Integrating safe electronic and effective physical systems into one, while taking care of the lives at stake is what Spike Stinger has achieved with its software based remotely operated tire deflation device. Now, there is no need to sacrifice effectiveness or a person’s life.
                        </p>
                        <p>
                            Known for its outstanding performance to stop vehicles in pursuit, the Spike Stinger is now ranked among the top devices to secure facility access around the world. Starting tests in France, at a Military Air Base, the Spike Stinger passed them with flying colors.
                        </p>
                    </div>
                </div>
                <br />

                <br />

                <p>Contrary to conventional and highly expensive ways to secure an entrance/exit, the cost of a Spike Stinger is much lower. Even then, no safety/security is compromised. If anything, you can be certain that no unwanted vehicle will cross the secured threshold.
                </p>
                <p>The Spike Stinger is extremely fast to set it in place. Within a couple of seconds, you can have secured access with one Spike Stinger. The ability to use it always plugged to a conventional outlet makes its endurance unchallenged (it can perform non-stop for years with very basic maintenance). Its maintenance takes barely a few minutes every week (only when necessary) and tech support is one quick call away, in case you have any questions.
                </p>
                <p>These devices have been put to the test to secure highschool and college stadiums, penitentiary parking lots and border crossings, main entrances of public and private high profile buildings, guard accesses during international summits, among others.
                </p>
                <h2 style={{ textAlign: "left", marginBottom: "inherit" }} className="subtitle2">Considerations during fixed usage:
                </h2>

                <ul>
                    <li>Even with its anti-corrosion materials, we suggest to cover the unit with a plexiglass case to avoid water and sun damage, as well as stopping people from fiddling with the unit and vehicles driving over it
                    </li>
                    <li>Water and rocks do not stop the devices from performing. Nonetheless, we strongly recommend using a 3cm tall platform to avoid rocks and water
                    </li>
                    <li>One unit is enough to secure an access. However, if there is a way in and a way out, or multiple lanes, we recommend using more than one unit. These can be set to be used synchronized or independent from each other
                    </li>
                    <li>In countries like the UK and Belgium, plate recognition systems became popular. These are commonly used in combination with the Spike Stinger. Please, ask about customization and integration possibilities
                    </li>
                </ul>

                <p>If you wish to secure a facility with the Spike Stinger, get in touch with us <Link to="/contact"><strong>here</strong></Link> . We will gladly assess your situation and give you the best possible advice on how to make it safe.
                </p>
            </section>
        );
    }
}

export default SetUp;