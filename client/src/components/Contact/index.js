import React, { useState, useEffect } from "react";
import { validateEmail } from "../../utils/helpers";
import phone from "../../assets/images/phone.png";
import emailme from "../../assets/images/email-me.png";
import axios from "axios";
import Loader from "../Loader";
import Success from "../Success";
import Modals from "../Modals";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Please enter a valid email address");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
      //   console.log("errorMessage", errorMessage)
    }
    if (!errorMessage) {
      //spread operator ...
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  }
  async function handleSumbit(e) {
    e.preventDefault();
    console.log("handleSubmit", formState);
    console.log(`errorMessage: ${errorMessage}`);

    const res = await axios.post(`/api/contact`, formState);
  }

  return (
    <div className="">
      <h1 id="contact-title" className="">
        Contact me
      </h1>
      <section id="" className="">
        <form id="form-control" className=" w-3/4">
          <div id="" className="">
            <label id="name" htmlFor="name" className="">
              Name:
            </label>
            <input
              className="form-input flex"
              type="text"
              name="name"
              onBlur={handleChange}
              defaultValue={name}
            />
          </div>
          <div id="" className="">
            <label id="email" htmlFor="email" className="">
              Email:
            </label>
            <input
              className="form-input flex"
              type="email"
              name="email"
              onBlur={handleChange}
              defaultValue={email} //this is the default value from the state object above
            />
          </div>
          <div id="" className="">
            <label id="message" htmlFor="message" className="flex">
              Message:
            </label>
            <textarea
              className="form-input"
              name="message"
              rows="5"
              onBlur={handleChange}
              defaultValue={message}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          {/* <button className="" type="submit">
            Send
          </button> */}
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSumbit}
          >
            Send
          </button>

          {/* //my email thats clickable and my phone number thats clickable */}
          <p id="contact-icons-style" className="contact-info">
            <a href="mailto:jhack00@icloud.com " className="">
              <img src={emailme} alt="email1" className="animate-pulse " />
              <span id="orange" className="">
                jhack00@icloud.com
              </span>
            </a>
            <a href="tel:+1-512-779-1970" className="">
              <img src={phone} alt="phone" className="animate-pulse " />

              <span id="orange" className="">
                512-779-1870
              </span>
            </a>
          </p>
        </form>
      </section>
    </div>
  );
}

export default ContactForm;
