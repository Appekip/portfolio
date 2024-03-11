import React from 'react';
import mainInterface from '../interfaces/mainInterface';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './navbar';
import Hobbies from './hobbies'
import About from './about'
import Projects from './projects';

const Main: React.FC<mainInterface> = (props) => {
    return (
        <div id="container">
        <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </div>
      </Router>
      </div>
    );
  }
  
  export default Main;