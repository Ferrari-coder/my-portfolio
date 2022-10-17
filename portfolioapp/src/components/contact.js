import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_porfolioForm",
        "MyPortfolioForm",
        form.current,
        "-R4-usep-8Iy_NEl5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-head">
        <h1>CONTACT</h1>
        <h5>Want to work with me? Kindly fill out this short form, and I will 
get back to you as soon as I can.</h5>
      </div>
      <div className="contact-body">
       
        <div className="container">
          <form ref={form} onSubmit={sendEmail}>
            <div class="form-row">
              <div class="input-data">
                <input
                  type="text"
                  name="Full-name"
                  id="full-name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div class="input-data">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <div class="input-data">
                <input type="text" name="subject" placeholder="Subject" />
              </div>
            </div>
            <div class="form-row textarea">
              <div class="input-data">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="input-icon">
              <input type="submit" value="Send message" id="submit" />
              <i class="fa-solid fa-paper-plane"></i>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
