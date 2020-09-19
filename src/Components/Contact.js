import React, { useState } from "react";
import emailjs from "emailjs-com";
import { env } from "../Vars/config";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("Error Message Test");

  const reg = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const { REACT_APP_EMAILJS_USERID, REACT_APP_EMAILJS_TEMPLATEID } = env;

  function submitForm(event) {
    event.preventDefault();
    if (valid()) {
      sendFeedback({
        user_name: userName,
        user_email: userEmail,
        user_message: userMessage,
      });
    } else {
      setErrorMessage("All feilds required!");
    }
  }

  function valid() {
    if (userName === "" || userEmail === "" || userMessage === "") {
      setErrorMessage("All fields required!");
      setTimeout(function () {
        setErrorMessage("");
      }, 2000);
      return false;
    }
    if (!reg.test(String(userEmail).toLocaleLowerCase())) {
      setErrorMessage("All fields required!");
      setTimeout(function () {
        setErrorMessage("");
      }, 2000);
      return false;
    }
    return true;
  }

  function sendFeedback(variables) {
    emailjs
      .send(
        "gmail",
        REACT_APP_EMAILJS_TEMPLATEID,
        variables,
        REACT_APP_EMAILJS_USERID
      )
      .then((res) => {
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setErrorMessage("Sent sucessfully!");
        setTimeout(function () {
          setErrorMessage("");
        }, 2000);
      })
      .catch((err) => {
        setErrorMessage("All fields required!");
      });
  }

  function change(e) {
    if (e.target.name === "user_name" && e.target.value.length >= 0) {
      setUserName(e.target.value);
    }

    if (e.target.name === "user_email" && e.target.value.length >= 0) {
      setUserEmail(e.target.value);
    }
    if (e.target.name === "user_message" && e.target.value.length >= 0) {
      setUserMessage(e.target.value);
    }
  }

  const errorMessaging = (msg) => {
    if (msg.length > 0) {
      return <p className="error__message">{msg}</p>;
    }
  };

  return (
    <div className="cube__face cube__face--contact">
      <div className="contact">
        <h1 className="contact__heading">Contact Me!</h1>
        <div className="contact__error">{errorMessaging(errorMessage)}</div>
        <div className="contact__form">
          <form className="form" onSubmit={submitForm}>
            <input type="hidden" name="contact_number" />
            <label className="form__name">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="form__name__input"
              value={userName}
              onChange={change}
            />
            <label className="form__email">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="form__email__input"
              value={userEmail}
              onChange={change}
            />
            <label className="form__message">Message</label>
            <textarea
              name="user_message"
              placeholder="What service are you looking for?"
              className="form__message__input"
              value={userMessage}
              onChange={change}
            />
            <input className="form__btn btn" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}
