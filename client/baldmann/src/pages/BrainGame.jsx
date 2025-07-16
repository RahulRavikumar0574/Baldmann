import React from "react";
import Lottie from "lottie-react";
import './BrainGame.css';
import gameAnimation from './game-animation.json';

const BrainGame = () =>{
    return(
        <>
        <div className="game-main">
            <div className="game-div">
            <Lottie animationData={gameAnimation} className='game-animation'/>
            <div className="game-info">
                <p className="game-title">Try our first game</p>
                <button className="game-explore"><a href="https://www.baldgame.xyz/">Explore</a></button>
            </div>
            
            </div>
        </div>
        </>
    );
};

export default BrainGame;