import React, { useEffect, useRef, useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!isOpen);
  };
  const menuRef = useRef(null)
  const handleOutsideClick=(e)=>{
if(menuRef.current && !menuRef.current.contains(e.target)){
  setOpen(false)
}
  }
  const handleMenuItemClick = () => {
    setOpen(false);
    // Additional logic for menu item click
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">      <h3 className="small-logo" style={{color:"",fontWeight:'bold'}}> <span style={{fontWeight:"lighter"}}>| </span>T <span style={{fontWeight:"lighter"}}>| </span>S <span style={{fontWeight:"lighter"}}>| </span>B <span style={{fontWeight:"lighter"}}>| </span></h3>
</Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
         <li onClick={handleMenuItemClick} ref={menuRef}><li>
            <Link to="/">Home</Link>
          </li>
          <span className="specialNav">
          <li onClick={handleMenuItemClick}>
            <Link to="/rooms/double-deluxe">Deluxe Room (ottoman)</Link>
          </li>
          <li onClick={handleMenuItemClick}>
            <Link to="/rooms/family-deluxe">Family Deluxe Room (ottoman)</Link>
          </li>
          <li onClick={handleMenuItemClick}>
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
