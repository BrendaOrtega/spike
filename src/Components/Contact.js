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

class Contact extends Component {
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
            <section className="contact">
                <section className="gallery">
                    <div className="photos">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/2Stingers.png?alt=media&token=9579684d-5806-4aa0-bf10-952cc4bcbd97" alt="branding img" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/Achtervolging.png?alt=media&token=d3b22bb9-fcfa-4d01-a83b-3c995eb31149" alt="branding img" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/FlatTires.png?alt=media&token=a6bc1a26-5461-4239-a101-b9a20561901c" alt="branding img" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/FlatTires1.png?alt=media&token=170ecfe0-2167-4dd2-93dd-a9bb1cf2f159" alt="branding img" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/Knop.png?alt=media&token=65778ee9-3e26-40c8-b9ae-6e43af17de38" alt="branding img" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/Motor1.png?alt=media&token=6f14382d-379d-4fc1-abd5-51cc9f344052" alt="branding img" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/Sjors.png?alt=media&token=bca519c6-b865-42bf-a3a9-52963c3c5a8f" alt="branding img" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/Underground_city.png?alt=media&token=7552ae2c-25c8-4fd7-8e56-1562f27bab20" alt="branding img" />

                    </div>
                </section>
                <section id="contact" className="contacto">
                    <div className="contact_descript">
                        <iframe title="company map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.678357055867!2d5.524512815767693!3d51.44570057962508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d8984df40151%3A0x819e5775916b5124!2sUrkhovenseweg%2017%2C%205641%20KA%20Eindhoven%2C%20Netherlands!5e0!3m2!1sen!2smx!4v1628481560922!5m2!1sen!2smx" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" />
                    </div>
                    <div>
                        <h2>Contact us</h2>
                        <p>We will get in touch with you as soon as possible.</p>
                        <form onSubmit={this.sendEmailWithService} className="invite-form">
                            <input value={this.state.name} onChange={this.onChange} placeholder="Name" name="name" required />
                            <input value={this.state.phone} onChange={this.onChange} placeholder="Telephone number" name="phone" required />
                            <input value={this.state.email} onChange={this.onChange} placeholder="Email address" name="email" required />
                            <textarea value={this.state.message} onChange={this.onChange} className="txtarea" type="text" placeholder="Message" name="message" required />


                            <button className="btn_yellow">Submit</button>

                        </form>

                    </div>
                </section>
            </section>
        );
    }
}

export default Contact;