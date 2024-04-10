import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">      <h3 className="small-logo" style={{color:"",fontWeight:'bold'}}>🇹🇸🇧</h3>
</Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
         <li><li>
            <Link to="/">Home</Link>
          </li>
          <span className="specialNav">
          <li>
            <Link to="/rooms/double-deluxe">Deluxe Room (ottoman)</Link>
          </li>
          <li>
            <Link to="/rooms/family-deluxe">Family Deluxe Room (ottoman)</Link>
          </li>
          <li>
            <Link to="/rooms/presidential-room">presedential Room (ottoman)</Link>
          </li>
          </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
