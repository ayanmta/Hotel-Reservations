import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import logo from "../src/images/logo.svg";

import SingleRoom from "./pages/SingleRoom";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";
import Marketing from "./pages/Marketing";
import Ganga from "./pages/Ganga";
import { IoLogoWhatsapp } from "react-icons/io";



function App() {
  return (
    <div>
      <span className="shilabagh">
        <img src={logo} alt="Beach Resort" />
      </span>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Marketing />} />
        <Route exact path="/property/ottoman" element={<Home />} />
        <Route exact path="/property/hotel-ganga-palace" element={<Ganga />} />

        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route element={<Error />} />
      </Routes>
          <p>*prices may vary , please contact owner for more info</p>
     <a
        href={`https://wa.me/9816930002/?text=Hi ,I am looking to book a stay at Shillabagh.`}
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      ><IoLogoWhatsapp color="green" enableBackground={"white"}  />
    </a>
    </div>
  );
}

export default App;
