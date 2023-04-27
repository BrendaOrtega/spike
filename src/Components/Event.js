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
                    <p> If you wish to receive an invitation for our <strong>March 2024 academy</strong>, please fill in the following form. We will send you a detailed email with the invitation for the event, and/or the necessary materials for you to take it online.
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