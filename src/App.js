import logo from "./logo.svg";
import H from "./Component/Hero/hero";
import About from "./Component/About/page";
import Navbar from "./Component/Navbar/page";
import Contact from "./Component/Contact/page";
import Work from "./Component/Work/page";
import Intro from "./Component/Intro/page";
import Footer from './Component/Footer/page'
function App() {
  return (
    <>
      <Navbar />
      {/* <div className=""> */}
      <Intro />
      <H />
      <About />
      <Work />

      <Contact />
      <Footer/>
      {/* </div> */}
    </>
  );
}

export default App;
