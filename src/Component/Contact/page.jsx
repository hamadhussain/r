// import React from "react";

// const Contact = () => {
//   return (
//     <div className=" terminal flex justify-center items-center">
//       <div className="  contact ">mmmndm</div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  let whatsappLink = `https://wa.me/${+923462351008}?text=${encodeURIComponent(
    "hello"
  )}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <div
      name="Contact"
      className=" flex flex-col overflow-hidde  justify-center items-center contact-containe p-12 terminal "
    >
<div className="w-[700px]">
<div className="  text-lg text-start  justify-center items- py-7">
        <div className=" flex flex-col  ">
          <span className=" font-extrabold text-4xl py-3">Let's talk</span>
          <p className=" text-stone-200">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.{" "}
          </p>
        </div>
      </div>
      <br />
      <br />
      <form onSubmit={handleSubmit} className="  h-fit    ">
        <div className="form-group">
          <label htmlFor="full-name">Full Name</label>
          <input
            className=" p-10 bg-zinc-900"
            type="text"
            id="full-name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="ex., John Doe"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            className=" p-10 bg-zinc-900"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="ex., johndoe@gmail.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            className=" p-10 bg-zinc-900"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Type your message here..."
          />
        </div>
        <div className="form-group">
          <button type="submit">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              // className="text-blue-500"
            >
              Send Message
            </a>
          </button>
        </div>
      </form>
</div>
    </div>
  );
};

export default Contact;
