import React from "react";
import './MLmodel.css';
import Lottie from "lottie-react";
import mlAnimation from './ml_animation.json';

const MLmodel = () => {
    return(
        <>
        <p className="title-main">Upcoming</p>
        <div className="model-main">
            <div className="model-div">
                <p className="model-title">Machine Learning Models</p>
                <Lottie animationData={mlAnimation} className='ml-animation'/>
            </div>
        </div>
        </>
    );
};

export default MLmodel;