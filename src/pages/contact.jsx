import { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
      if (!inputValue) {
        setErrorMessage("Email is required");
      } else {
        setErrorMessage("");
      }
    } else if (inputType === "userName") {
      setUserName(inputValue);
      if (!inputValue) {
        setErrorMessage("Name is required");
      } else {
        setErrorMessage("");
      }
    } else if (inputType === "message") {
      setMessage(inputValue);
      if (!inputValue) {
        setErrorMessage("Message is required");
      } else {
        setErrorMessage("");
      }
    } else {
      setErrorMessage(`Unkown Input ${inputValue}`);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!userName) {
      setErrorMessage("Name is required");
      return;
    } else if (!validateEmail(email) && !email) {
      setErrorMessage("Email is required");
      return;
    } else if (!message) {
      setErrorMessage("Message is required");
      return;
    }

    setUserName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
    alert(
      `Thanks ${userName} for reaching out, I will be in contact with you shortly!`
    );
  };

  return (
    <>
      <div className="pageHeaderBox">
        <h2 className="pageHeader">Contact Me &#128172;</h2>
      </div>
      <div className="exampleForm">
        Example form. Email me <a href="mailto: bradylange99@gmail.com">here</a>
      </div>
      <div className="formBox">
        <form className="form" onSubmit={handleFormSubmit}>
          <h2 className="formHeaders">Name:</h2>
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <h2 className="formHeaders">Email:</h2>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <h2 className="formHeaders">Message:</h2>
          <textarea
            rows={15}
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
          />
          <button type="submit">Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </>
  );
}
