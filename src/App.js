import logo from "./logo.svg";
import H from "./Component/Hero/hero";
import About from "./Component/About/page";
import Navbar from "./Component/Navbar/page";
import Contact from './Component/Contact/page'
import Work from './Component/Work/page'

function App() {
  return (
    <>
      <Navbar />
      {/* <div className=""> */}
        <H />
        <About />
        <Work/>

        <Contact/>
      {/* </div> */}
    </>
  );
}

export default App;
