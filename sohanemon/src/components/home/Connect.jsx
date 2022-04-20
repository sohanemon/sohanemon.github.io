import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const inputStyle =
  "ring ring-orange-400 rounded-md p-3 focus:outline-orange-600  ";
const Connect = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ebu3kto",
        "template_f4jrpjg",
        form.current,
        "wJ6PlRk6pnRWUbGGJ"
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
    <div className=" container justify-evenly flex h-[60vh] my-12 ">
      <div className=" flex flex-col justify-center pb-40">
        <p className="text1">Get in touch </p>
        <p className="text2 text-3xl">by Connecting with me</p>
      </div>
      <div ref={form} className=" flex flex-col justify-center gap-12 w-1/3 ">
        <input
          name="user_name"
          placeholder="Your name"
          className={inputStyle}
          type="text"
        />
        <input
          name="user_email"
          placeholder="Email"
          className={inputStyle}
          type="text"
        />
        <textarea
          name="message"
          placeholder="W
          
          rite your Message here"
          className={inputStyle}
          type="text"
        />
        <button
          className="button self-center px-6 max-w-min"
          onClick={sendEmail}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Connect;
