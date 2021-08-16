import React, { Component } from 'react';
import sendEmail from '../services/email'
import { message } from 'antd'

const initialState = {
    name: '',
    phone: '',
    email: '',
    message: '',
    website: '',
    org: '',
}

class Event extends Component {

    state = initialState

    onChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    }

    sendEmailWithService = (e) => {
        e.preventDefault()
        sendEmail(this.state)
            .then(data => {
                console.log(data)
                if (data.ok) {
                    message.success('Request successfuly sent')
                } else {
                    message.error('Error on request, please try again')
                }
            })

        this.setState(initialState)
    }

    render() {
        return (
            <section>
                <section className="event">
                    <h2>SPIKE STINGER ACADEMY</h2>
                    <div className="img">
                    </div>
                    <p>
                        Year after year, law enforcement officers and partners of Spike Stinger International come together from all around the world to learn about the latest tips and tweaks regarding our devices. We also offer different workshops. Last year, ex Dutch Special Forces and retired US Navy members trained our audience in the following:
                    </p>
                    <ul>
                        <li>Spike Stinger fixed location</li>
                        <li>Roadblock setup</li>
                        <li>How to prepare the deflation and engagement point</li>
                        <li>Steps towards an efficient organization</li>
                        <li>Maximize your human resources, and keep them safe</li>
                        <li>Decision making under stressful situations</li>
                    </ul>
                    <p>Because of the pandemic, 2020 and 2021 Academy took place online. We have sent some didactic materials to every member who registered, as well as livestreamed our instructors in action. In those two years, with more than 250 registrations online and 28 people attending in person, we have awarded 472 certifications.</p>
                    <p>
                        If you <strong>wish to receive an invitation for the 2022 academy</strong>, please fill in the following form. We will send you an email with the invitation for the event, and/or the necessary materials for you to take it online if the restrictions to fight COVID19 remain unchanged.
                    </p>
                    <form onSubmit={this.sendEmailWithService} className="invite-form">
                        <input value={this.state.name} onChange={this.onChange} placeholder="Name" name="name" required />
                        <input value={this.state.org} onChange={this.onChange} placeholder="Organization name" name="org" required />
                        <input value={this.state.website} onChange={this.onChange} placeholder="Website" name="website" required />
                        <input value={this.state.phone} onChange={this.onChange} placeholder="Telephone number" name="phone" required />
                        <input value={this.state.email} onChange={this.onChange} placeholder="Email address" name="email" required />
                        <br />
                        <br />

                        <button className="btn_yellow">Submit</button>

                    </form>
                </section>
            </section>
        );
    }
}

export default Event;