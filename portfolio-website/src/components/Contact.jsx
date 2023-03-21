import React, { useRef, useState } from "react";
import github from "../assets/github-mark-white.png";
import linked from "../assets/linkedinlogo.png";
import medium from "../assets/medium-black-symbol.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [user_name, setUser_name] = useState("");
  const [user_email, setUser_email] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wb48ho9",
        "template_u4v7tlm",
        form.current,
        "0AoACuAncAwV4gUSt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setUser_name("");
    setUser_email("");
    setMessage("");
    setSuccess(true);
  };

  return (
    <div id="contact" className="antialiased bg-gray-300 px-[12.5%] py-10 ">
      <div className="flex w-full">
        <div className="flex flex-col lg:flex-row lg:space-x-10 lg:space-y-0 space-y-4  p-8 bg-[#0097b2] rounded-xl max-w-[75vw] items-center justify-center">
          <div className="flex flex-col justify-between">
            <h1 className="text-4xl font-bold text-white ">Contact Me</h1>
            <p className="pt-2 text-white text-lg tracking-wide">
              I'm currently looking for a new opportunity, my inbox is always
              open. My focus is in creating websites and web applications with a
              focus on the front-end or full-stack, but I am also open to
              exploring other opportunities.
            </p>
            <p className="pt-2 text-white text-lg tracking-wide mb-5">
              Whether you have a question or just want to say "Hi &#128075;",
              use the form to send me a message and I will get back to you as
              soon as possible!
            </p>
            <div className="flex flex-col space-y-4">
              <div className="inline-flex space-x-2 items-center">
                <a
                  href="https://www.linkedin.com/in/andrewjohnjulian/"
                  target="blank"
                >
                  <img src={linked} alt="linked" className="w-8 h-8 m-2" />
                </a>
                <span className="text-white">Connect with Me on LinkedIn</span>
              </div>
              <div className="inline-flex space-x-2 items-center ">
                <a href="https://github.com/Andrewjulian" target="blank">
                  <img src={github} alt="github" className="w-8 h-8 m-2" />
                </a>
                <span className="text-white">Explore Out My Github</span>
              </div>
              <div className="inline-flex space-x-2 items-center ">
                <a href="https://medium.com/@andrewjjulian" target="blank">
                  <img
                    src={medium}
                    alt="medium"
                    className="w-8 h-8 m-2 bg-white rounded-full"
                  />
                </a>
                <span className="text-white">Read My Articles on Medium</span>
              </div>
            </div>
          </div>
          <div className="w-full text-black">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col space-y-4"
              >
                <div>
                  <label htmlFor="name" className="text-gray-700 font-bold">
                    Enter Your Name
                  </label>
                  <input
                    onChange={(e) => {
                      setUser_name(e.target.value);
                      setSuccess(false);
                    }}
                    value={user_name}
                    type="text"
                    name="user_name"
                    id="user_name"
                    placeholder="Your name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#0097b2] mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-gray-700 font-bold">
                    Enter Your Email
                  </label>
                  <input
                    onChange={(e) => {
                      setUser_email(e.target.value);
                      setSuccess(false);
                    }}
                    value={user_email}
                    type="text"
                    name="user_email"
                    id="user_email"
                    placeholder="Your email"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#0097b2] mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-gray-700 font-bold">
                    Add Your Message
                  </label>
                  <textarea
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setSuccess(false);
                    }}
                    value={message}
                    name="message"
                    id="message"
                    rows="4"
                    placeholder="Your message"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#0097b2] mt-2"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-block self-end font-bold p-2 bg-[#0097b2] text-white rounded-md py-2"
                >
                  Send Message
                </button>
                {success ? (
                  <div
                    class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                    role="alert"
                  >
                    <span class="font-medium">Email Sent!</span> I will get back
                    to you as soon as I can. Thanks for connecting!
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
