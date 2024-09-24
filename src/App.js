import logo from "./logo.svg";
import "./App.css";
import H from "./Component/Hero/hero";
import About from "./Component/About/page";
import Navbar from "./Component/Navbar/page";
import Contact from './Component/Contact/page'

function App() {
  return (
    <>
      <Navbar />
      {/* <div className=""> */}
        <H />
        <About />
        <Contact/>
      {/* </div> */}
    </>
  );
}

export default App;
