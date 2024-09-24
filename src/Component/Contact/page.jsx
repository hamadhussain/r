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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to server)
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <div className="contact-containe terminal flex flex-col  justify-center items-center">
      <div className=" text-lg">
        <h1 className=" font-extrabold">
        Let's talk
        </h1>
        <p className=" text-stone-200">
        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.        </p>
      </div><br /><br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="full-name">Full Name</label>
          <input

          className=" bg-zinc-900"
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
          className=" bg-zinc-900"
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
          className=" bg-zinc-900"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Type your message here..."
          />
        </div>
        <div className="form-group">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
