import React from "react";
import "./modeCard.css";

const ModeThreeCard = () => {
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
                        <span className="viper">battleground</span>
                        <span className="viper">battleground</span>
                        <span className="viper">battleground</span>
                    </div>
                </div>

            </div>
            <div className="mist-container">
                <div className="mist"></div>
            </div>
            <strong id="mode-text-ext">Battleground</strong>
            <strong id="mode-text-border">Battleground</strong>
        </div>
    );
};

export default ModeThreeCard;
