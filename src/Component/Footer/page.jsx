// import React from 'react';
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
// import { BiLogoGmail } from "react-icons/bi";
// import { GrLinkedin } from "react-icons/gr";

// const Footer = () => {
//   return (
//     <footer className="bg-none border-t-2 relative bottom-0 border-zinc-900 py-6 my-4">
//       <div className="container flex justify-between items-center mx-auto text-center px-12">
//         <p className="text-stone-200 mb-2">
//           &copy; {new Date().getFullYear()} Hammad Hussain. All rights reserved.
//         </p>
//         <div className="flex justify-center space-x-6">
//           <a
//             href="https://www.linkedin.com/in/hammadhussaindeveloper"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-gray-600 transition duration-200"
//           >
//             <GrLinkedin size={24} />
//           </a>
//           <a
//             href="https://github.com/hamadhussain"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-gray-600 transition duration-200"
//           >
//             <FaGithub size={24} />
//           </a>
//           <a
//             href="mailto:hammad31012004@gmail.com"
//             className=" hover:text-gray-600 transition duration-200"
//           >
//             <BiLogoGmail  size={24} />
//           </a>
//         </div>
//         <p className="text-stone-200 mt-2">
//           Built with passion for web development.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-none border-t-2 border-zinc-900 py-6 my-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center px-6 md:px-12">
        <p className="text-stone-200 mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Hammad Hussain. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mb-2 md:mb-0">
          <a
            href="https://www.linkedin.com/in/hammadhussaindeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition duration-200"
          >
            <GrLinkedin size={24} />
          </a>
          <a
            href="https://github.com/hamadhussain"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:hammad31012004@gmail.com"
            className="hover:text-gray-600 transition duration-200"
          >
            <BiLogoGmail size={24} />
          </a>
        </div>
        <p className="text-stone-200 mt-2 md:mt-0">
          Built with passion for web development.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
