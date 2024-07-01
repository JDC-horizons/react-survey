import Checkboxes from "../Checkboxes";
import RadioButtons from "../RadioButtons";

import { useState, useRef } from "react";

const Form = (props) => {
  let colourRef = useRef(null);
  let timeRef = useRef([]);
  let commentsRef = useRef(null);
  let nameRef = useRef(null);
  let emailRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newResponse = {
      colour: colourRef.current,
      time: timeRef.current,
      comments: commentsRef.current,
      name: nameRef.current,
      email: emailRef.current,
    };
    props.addAnswerToList(newResponse);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioButtons colourRef={colourRef} />
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <Checkboxes timeRef={timeRef} />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          ref={commentsRef}
          onChange={(e) => {
            commentsRef.current = e.target.value;
          }}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          ref={nameRef}
          onChange={(e) => {
            nameRef.current = e.target.value;
          }}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          ref={emailRef}
          onChange={(e) => {
            emailRef.current = e.target.value;
          }}
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
};

export default Form;
