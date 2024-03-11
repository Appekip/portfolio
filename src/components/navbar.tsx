import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>

        <div id="header">
            <h2>Arttu P</h2>
        </div>
        
        <div id="navi">
            <Link to="/projects" id="logo"><h2>Dev projects</h2></Link>
             <Link to="/about" id="logo"><h2>About Me</h2></Link>
             <Link to="/hobbies" id="logo"><h2>Hobbies</h2></Link>
        </div>
      
    </nav>
  );
}

export default Navbar;