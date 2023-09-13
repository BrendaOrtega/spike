import React, { Component } from "react";
import sendEmail from "../services/email";
import { message } from "antd";

const initialState = {
  name: "",
  phone: "",
  email: "",
  message: "",
  website: "",
  org: "",
};

class Contact extends Component {
  state = initialState;

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  sendEmailWithService = (e) => {
    e.preventDefault();
    sendEmail(this.state).then((data) => {
      console.log(data);
      if (data.ok) {
        message.success("Request successfuly sent");
      } else {
        message.error("Error on request, please try again");
      }
    });

    this.setState(initialState);
  };
  render() {
    return (
      <section className="contact">
        <section className="gallery">
          <div className="photos">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/smallimages%2F2Stingers.png?alt=media&token=6456b3ca-56d6-4224-98e5-300df83e3246"
              alt="branding img"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/smallimages%2FAchtervolging.png?alt=media&token=3144b1ec-73f6-4d06-b0c0-62bf50349559"
              alt="branding img"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/FlatTires.png?alt=media&token=a6bc1a26-5461-4239-a101-b9a20561901c"
              alt="branding img"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/smallimages%2FBus.png?alt=media&token=d928e516-cbfb-4cd5-8b64-a583860e1f54"
              alt="branding img"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/smallimages%2FKnop.png?alt=media&token=cec41516-173b-47b5-ae9c-07fc09c4f914"
              alt="branding img"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/Motor1.png?alt=media&token=6f14382d-379d-4fc1-abd5-51cc9f344052"
              alt="branding img"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/smallimages%2FSjors.png?alt=media&token=87a484d3-4cf0-4e88-bd7a-e9cd9640de22"
              alt="branding img"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/spike-ed33d.appspot.com/o/smallimages%2FUnderground_city.png?alt=media&token=03a7a085-99e3-4444-a03e-e1a65f1b66be"
              alt="branding img"
            />
          </div>
        </section>
        <section id="contact" className="contacto">
          <div className="contact_map">
            <iframe
              title="company map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.678357055867!2d5.524512815767693!3d51.44570057962508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d8984df40151%3A0x819e5775916b5124!2sUrkhovenseweg%2017%2C%205641%20KA%20Eindhoven%2C%20Netherlands!5e0!3m2!1sen!2smx!4v1628481560922!5m2!1sen!2smx"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
            />
          </div>
          <div className="contact_descript">
            <h2>Contact us</h2>
            <p>We will get in touch with you as soon as possible.</p>
            <form onSubmit={this.sendEmailWithService} className="invite-form">
              <input
                value={this.state.name}
                onChange={this.onChange}
                placeholder="Name"
                name="name"
                required
              />
              <input
                value={this.state.phone}
                onChange={this.onChange}
                placeholder="Telephone number"
                name="phone"
                required
              />
              <input
                value={this.state.email}
                onChange={this.onChange}
                placeholder="Email address"
                name="email"
                required
              />
              <textarea
                value={this.state.message}
                onChange={this.onChange}
                className="txtarea"
                type="text"
                placeholder="Message"
                name="message"
                required
              />
              <button className="btn_yellow">Submit</button>
            </form>
          </div>
        </section>
      </section>
    );
  }
}

export default Contact;
