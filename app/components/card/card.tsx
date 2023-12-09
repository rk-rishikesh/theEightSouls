import React from "react";
import "./card.css";

const Card = () => {
    return (
        <div className="card">
            <div className="top-section">
                <div className="border"></div>
                <div className="icons">
                    <div className="logox">
                        AK47
                    </div>
                </div>
                <img alt="Card" src="https://i.ibb.co/qJsVLtn/image.png" />
            </div>
            <div className="bottom-section">
                <span className="title">ATTACHMENTS</span>
                <div className="attachmentCard">
                    <div className="socialContainer containerOne">
                        H
                    </div>

                    <div className="socialContainer containerTwo">
                        C
                    </div>
                    <div className="socialContainer containerThree">
                        V
                    </div>


                </div>
            </div>

        </div>


    );
};

export default Card;
