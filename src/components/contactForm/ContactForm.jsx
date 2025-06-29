import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <form name="contact" method="POST" data-netlify="true" className="contact-form">
        <input type="hidden" name="form-name" value="contact" />

        <h2 className="form-heading">Contact Me</h2>

        <input type="text" name="name" placeholder="Your Name" required className="form-input" />
        <input type="email" name="email" placeholder="Your Email" required className="form-input" />
        <textarea name="message" placeholder="Your Message" rows="5" required className="form-textarea"></textarea>

        <button type="submit" className="form-button">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
