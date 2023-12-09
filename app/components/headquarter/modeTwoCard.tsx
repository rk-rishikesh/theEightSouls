import React from "react";
import "./modeCard.css";

const ModeTwoCard = () => {
    return (
        <div className="card-border">
            <div className="card-bg">
                <div className="container-logo">
                    <div className="logo"></div>
                    <div className="logo-inside">
                        <div className="first"></div>
                        <div className="second"></div>
                    </div>
                </div>
                <div id="blur-area"></div>
                <div className="marquee">
                    <div className="marquee__inner" aria-hidden="true">
                        <span className="viper">frontline</span>
                        <span className="viper">frontline</span>
                        <span className="viper">frontline</span>
                    </div>
                </div>
            </div>
            <div className="mist-container">
                <div className="mist"></div>
            </div>
            <strong id="mode-text-ext">Frontline</strong>
            <strong id="mode-text-border">Frontline</strong>
        </div>
    );
};

export default ModeTwoCard;
