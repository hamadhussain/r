// // import React from "react";

// // const Contact = () => {
// //   return (
// //     <div className=" terminal flex justify-center items-center">
// //       <div className="  contact ">mmmndm</div>
// //     </div>
// //   );
// // };

// // export default Contact;

// import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     message: "",
//   });
//   let whatsappLink = `https://wa.me/${+923462351008}?text=${encodeURIComponent(
//     `Name: ${formData.fullName}\nYour Message: ${formData.message}`
//   )}`;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setFormData({ fullName: "", email: "", message: "" });
//   };

//   return (
//     <div
//       name="Contact"
//       className=" flex flex-col overflow-hidde  justify-center items-center contact-containe p-12 terminal "
//     >
//       <div className="w-[700px]">
//         <div className="  text-lg text-start  justify-center items- py-7">
//           <div className=" flex flex-col  ">
//             <span className=" font-extrabold text-4xl py-3">Let's talk</span>
//             <p className=" text-stone-200">
//               Whether you’re looking to build a new website, improve your
//               existing platform, or bring a unique project to life, I’m here to
//               help.{" "}
//             </p>
//           </div>
//         </div>
//         <br />
//         <br />
//         <form onSubmit={handleSubmit} className="  h-fit    ">
//           <div className="form-group">
//             <label htmlFor="full-name">Full Name</label>
//             <input
//               className=" p-10 bg-zinc-900"
//               type="text"
//               id="full-name"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//               placeholder="ex., John Doe"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email Address</label>
//             <input
//               className=" p-10 bg-zinc-900"
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="ex., johndoe@gmail.com"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Your Message</label>
//             <textarea
//               className=" p-10 bg-zinc-900"
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               placeholder="Type your message here..."
//             />
//           </div>
//           <div className="form-group">
//             <button type="submit">
//               <a
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Send Message
//               </a>
//             </button>
//           </div>
//         </form>
//       </div>
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

  const whatsappLink = `https://wa.me/${+923462351008}?text=${encodeURIComponent(
    `Name: ${formData.fullName}\nYour Message: ${formData.message}`
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
   <>
   <div className=" flex justify-center gap-24  
    items-center">
   <img src="/assets/co.png" className=" max-w-md hidden lg:block" alt="" />

   <div
      name="Contact"
      className="flex flex-col justify-center items-center  p-1 md:p-2 md:py-4 sm:p-6 lg:p-12 sm:terminal"
    >
      <div className="w-ful px-12 ">
        <div className="text-lg text-start py-7">
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl md:text-4xl py-3">Let's talk</span>
            <p className=" hidden md:block">
              Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className=" w-96 space-y-4   ">
          <div className="form-group ">
            <label htmlFor="full-name" className="block text-sm font-medium text-gra-300">Full Name</label>
            <input
              className="w-full p-3  nt rounded-sm border-b-2 focus:outline-none focus:ring focus:ring-green-500"
              type="text"
              id="full-name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-gry-300">Email Address</label>
            <input
              className="w-full p-3 nt rounded-sm border-b-2 focus:outline-none focus:ring focus:ring-green-500"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="block text-sm font-medium text-gry-300">Your Message</label>
            <textarea
              className="w-full p-3 nt rounded-sm border-b-2 focus:outline-none focus:ring focus:ring-green-500"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Type your message here..."
              rows="4"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="w-full">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bock w-full text-center bg-gren-500 text-white rounded-md hover:bg-green-600 transition duration-200"
              >
                Send Message
              </a>
            </button>
          </div>
        </form>
      </div>
      
    </div>
   </div>
   </>
  );
};

export default Contact;
