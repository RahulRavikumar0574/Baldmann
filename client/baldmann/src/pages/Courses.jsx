import React, { useState, useRef } from "react";
import "./Courses.css";
import { faLeanpub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import Lottie from "lottie-react";
import animation from './7Pv6j1Yppi (1).json';

const Courses = () => {
  const lottieRef = useRef();
  return (
    <>
    <div className="course-main">
      <div className="course-hero">
        <div className="course-h-left">
          <p className="learn-text">
              Unlock Your Brain’s Potential with <span>BaldMann.</span>
          </p>
          <p className="learn-tagline">
              Dive into brain-tech courses that blend curiosity with control.
          </p>

          <div className="learn-icons">
            <FontAwesomeIcon icon={faLeanpub} fade className="icon-style"/>
            <FontAwesomeIcon icon={faBrain} fade className="icon-style"/>
            <FontAwesomeIcon icon={faCodeBranch} fade className="icon-style"/>
            <FontAwesomeIcon icon={faBolt} fade className="icon-style"/>
          </div>
          <button className="explore">Courses Launching Soon!</button>
          
        </div>
        <div className="course-h-right">
          <Lottie animationData = {animation} 
           lottieRef={lottieRef}
           style={{ width: 700, height: 400 }}/>
           {/* <button onClick={() => lottieRef.current.play()} className="play-button">Learn!</button> */}
           {/* <button onClick={() => lottieRef.current.stop()} className="stop-button">I have learnt enough</button> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Courses;

