import "./Navbar.css";
import { useState } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => {
  setIsOpen(!isOpen);
}


  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <h1>Abu Bakar</h1>
        </div>
{/* toggle button make for responsive */}
      <div className="hamburger" onClick={toggleMenu}>
        <span  className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
        <ul  className={`navbar-links ${isOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>

    </nav>
  )
}
