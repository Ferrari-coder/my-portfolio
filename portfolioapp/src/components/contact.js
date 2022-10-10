import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-head">
        <h5>CONTACT</h5>
        <h1>Let's talk about your next project</h1>
      </div>
      <div className="contact-body">
        <div className="contact-icons">
          <div className="icons-container">
            <span>
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <p>Lagos, Nigeria</p>
          </div>
          <div className="icons-container">
            <span>
              <i class="fa-solid fa-envelope"></i>
            </span>
            <p>oluwaferanmiaiyegbusi@gmail.com</p>
          </div>
          <div className="icons-container">
            <span>
              <i class="fa-solid fa-circle-check"></i>
            </span>
            <p>Freelance available</p>
          </div>
        </div>
        <form>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                name="First-name"
                id="first-name"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="input-data">
              <input
                type="text"
                name="Last-name"
                id="last-name"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-data">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                required
              />
            </div>
          </div>
          <div class="form-row textarea">
            <div class="input-data">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Type your message"
              ></textarea>
            </div>
          </div>
          <div className="input-icon">
          <input type="submit" value="Send message" id="submit"/>
          <i class="fa-solid fa-paper-plane"></i>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
