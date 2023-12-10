import React from "react";
import "./card.css";

const Card = () => {
    return (
        <div className="card">
            <div className="top-section">
                <div className="border"></div>
                <div className="icons">
                    <div className="logox">
                        ASSAULT11
                    </div>
                </div>
                <img alt="Card" src="https://gateway.lighthouse.storage/ipfs/QmaR4YijHbRPsUpY8GavabYZ2npW1w2dp9w3Lx1NCMicHj" />
            </div>
            <div className="bottom-section">
                <span className="title">ATTACHMENTS</span>
                <div className="attachmentCard">
                    <button className="socialContainer containerOne">
                        Mint Free Attachment NFT
                    </button>


                </div>
            </div>

        </div>


    );
};

export default Card;
