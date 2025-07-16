import React from "react";
import './AboutUs.css';
import { TbTargetArrow } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import Lottie from "lottie-react";
import mission from './mission.json';
import vision from './vision.json';
import values from './values.json';

const AboutUs = () => {
    return (
        <div className="about-main">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        {/* <TbTargetArrow size={40} /> */}
                        <Lottie animationData={mission} classname="mission-animation"></Lottie>
                        <p className="card-title">Our Mission</p>
                    </div>
                    <div className="flip-card-back">
                        <p>"To pioneer brain-computer interface technologies that enable intuitive, thought-driven interactions with technology, advancing both neuroscience and engineering to deliver practical, life-enhancing solutions for everyday challenges."</p>
                    </div>
                </div>
            </div>
            
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        {/* <FaRegEye size={40} /> */}
                        <Lottie animationData={vision}></Lottie>
                        <p className="card-title">Our Vision</p>
                    </div>
                    <div className="flip-card-back">
                        <p>"To create a world where technology seamlessly integrates with the human mind, empowering people to control and interact with their environment effortlessly, enhancing independence and quality of life."
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        {/* <IoDiamondOutline size ={40}/> */}
                        <Lottie animationData={values}></Lottie>
                        <p className="card-title">Our Values</p>
                    </div>
                    <div className="flip-card-back">
                        <p>We value integrity, innovation, teamwork, passion and accountability.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
