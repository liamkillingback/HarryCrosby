import React, { useRef } from "react";
import "./contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("Submit");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, number, message } = e.target.elements;
    let form_result = {
      name: name.value,
      email: email.value,
      number: number.value,
      message: message.value,
    };
    var element = document.getElementById("contact");
    emailjs
      .send(
        "service_3dos4xc",
        "template_xjh8yvf",
        form_result,
        "zQGkBSjtzA9P3zkoK"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Sent!");
          setFormStatus("Submit");
          element.reset();
        },
        (error) => {
          alert("Failed to send, please try again later.");
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      id="contact"
      className="contact__container"
    >
      <div className="contact__header">Contact me</div>
      <div className="contact__form">
        <div className="contact__form_inputs">
          <input
            id="name"
            className="form-control form-control-lg"
            type="text"
            placeholder="Name *"
          />
          <input
            id="email"
            className="form-control form-control-lg"
            type="email"
            placeholder="Email *"
          />
          <input
            id="number"
            className="form-control form-control-lg"
            type="text"
            placeholder="Phone Number "
          />
          <textarea
            id="message"
            className="form-control form-control-lg form-control-textarea"
            type="text"
            placeholder="Your Message here *"
          />

          <button className="contact__form-btn" type="submit">
            {formStatus}
          </button>
        </div>
      </div>
    </form>
  );
};
export default Contact;
