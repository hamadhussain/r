import logo from "./logo.svg";
import H from "./Component/Hero/hero";
import About from "./Component/About/page";
import Navbar from "./Component/Navbar/page";
import Contact from "./Component/Contact/page";
import Work from "./Component/Work/page";
import Intro from "./Component/Intro/page";
import Footer from "./Component/Footer/page";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import the AOS CSS


function App() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1200,  // Animation duration in milliseconds
  //     easing: 'ease',  // Animation easing
  //     once: true,      // Animation should trigger only once
  //   });
  // }, []);

  // return (
  //   <div className="App">
  //     <h1 data-aos="fade-up">Hello, AOS!</h1>
  //     <p data-aos="fade-in">This is a simple demonstration of AOS in React.</p>
  //     <div data-aos="flip-left">
  //       <h2>Flipping Animation</h2>
  //     </div>
  //   </div>
  // );
  return (
    <>
        <Navbar />
        <Intro />
        <H />
        <About />
        <Work />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
