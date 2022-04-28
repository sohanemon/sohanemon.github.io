import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { seSvg } from "../components/Navbar";
const inputStyle =
  "ring ring-orange-400 rounded-md p-3 focus:outline-orange-600 bg-slate-300 dark:bg-slate-800 ";
const Connect = () => {
  const [sent, setSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(true);
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
    <div
      id="connect"
      className=" container justify-evenly flex flex-col md:flex-row h-[100vh] mx-auto m-12  mb-40 sm:mb-0 "
    >
      <div className=" flex flex-col justify-center items-center gap-10 pb-4 mx-auto">
        <div className="text-center">
          <p className="text1 dark:text-slate-100">Get in touch </p>
          <p className="text2 text-3xl ">by Connecting with</p>
        </div>
        {seSvg(200)}
      </div>
      <div
        ref={form}
        className=" flex flex-col justify-center gap-12 md:w-1/3 w-2/3 mx-auto  "
      >
        {" "}
        <span
          className={`text-orange-300 text-center ${
            !sent ? "invisible" : "visible"
          }`}
        >
          Sent!
        </span>
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
          rows="4"
          name="message"
          placeholder="Write your Message here"
          className={inputStyle + "h-32"}
          type="text"
        />
        <motion.button
          initial={{ y: 10 }}
          animate={{ scale: 1.05, transition: { duration: 1, yoyo: Infinity } }}
          whileTap={{
            scale: 0.7,
            transition: {
              duration: 1,
            },
          }}
          whileInView={{ y: 0, transition: { yoyo: false, duration: 1 } }}
          className="button self-center px-6 max-w-min"
          onClick={sendEmail}
        >
          Send
        </motion.button>
      </div>
    </div>
  );
};

export default Connect;
