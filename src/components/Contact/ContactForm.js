import React from "react";
import contact from "../../images/contact.png";
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mdoqwozg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <>
      <section className="contact-area pb-100">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="contact-image">
                <img src={contact} alt="contact" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="contact-form">
                <form
                  onSubmit={handleSubmit}
                >
                  <div className="row">

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          className="form-control"
                          required
                          placeholder="Your email address"
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          id="message"
                          name="message"
                          className="form-control"
                          cols="30"
                          rows="6"
                          required
                          placeholder="Write your message..."
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="default-btn" disabled={state.submitting}>
                        <i className="flaticon-tick"></i>
                        Send Message <span></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;