import React from 'react';
import aboutInterface from '../interfaces/aboutInterface';

const About: React.FC<aboutInterface> = (props) => {
  return (
    <div id="container">

        <div id="aboutCard">

            <div id="aboutMe">

                <div id="intro">
                <h1>Who am I?</h1>
                </div>

                <div id="contact">

                </div>
            </div>

        </div>
        
      </div>
  );
}

export default About;