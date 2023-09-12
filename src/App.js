import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import logo from "../src/images/logo.svg";

import SingleRoom from "./pages/SingleRoom";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";
import Marketing from "./pages/Marketing";

function App() {
  return (
    <div>
      <span className="shilabagh">
        <img src={logo} alt="Beach Resort" />
      </span>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Marketing />} />
        <Route exact path="/property/:slug" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
