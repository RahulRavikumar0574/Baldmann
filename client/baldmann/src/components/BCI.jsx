import React from "react";
import './BCI.css';
import { LuBrainCircuit } from "react-icons/lu";
import { GoGraph } from "react-icons/go";
import { RiRobot2Line } from "react-icons/ri";
import { MdDevicesOther } from "react-icons/md";
const BCI = () =>{
    return(
        <>
        <div className="industry-main">
            <div className="about-bci">
                <h1 className="about-bci-title">
                    Understanding "BCI - Brain Computer Interfaces"
                </h1>
                <div className="about-bci-text">
                    <p>
                    Brain-Computer Interfaces (BCI) are a revolutionary technology that creates a direct pathway between the human brain and external devices. Imagine controlling a computer, wheelchair, or even a robotic arm using only your thoughts—this is exactly what BCI makes possible. It works by capturing brain signals through sensors, which translate neural activity into commands that machines can understand. Originally developed for medical purposes, like helping individuals with paralysis regain control, BCI is now making waves in gaming, virtual reality, and assistive tech. With advancements in AI and neuroimaging, BCI is evolving rapidly, allowing us to envision a future where mental commands could operate smart homes or enable seamless communication. As science fiction becomes reality, BCI holds the promise of bridging the gap between our minds and the digital world, unlocking endless possibilities for enhancing human abilities and transforming how we interact with technology.
                    </p>
                </div>
            </div>
            <div className="about-bci-stages">
                <div className="bci-stages">
                    <LuBrainCircuit/>
                    <h3>Stage 1 - Signal Acquisition</h3>
                    <p>The process of measuring brain signals in a brain-computer interface (BCI)</p>
                </div>
                <div className="bci-stages">
                    <GoGraph />
                    <h3>Stage 2 - Signal Processing</h3>
                    <p>After recording, the signals are processed to remove noise or reveal important information.</p>
                </div>
                <div className="bci-stages">
                    <MdDevicesOther />
                    <h3>Stage 3 -  Feature Extraction</h3>
                    <p>The signal features are passed to a  algorithm that converts them into commands for an output device.</p>
                </div>
                <div className="bci-stages">
                    <RiRobot2Line />
                    <h3>Stage 4 - Device Output </h3>
                    <p>The output device can perform functions like cursor control, letter selection, or robotic arm operation.</p>
                </div>
            </div>
        </div>
        </>
    );
}
export default BCI;