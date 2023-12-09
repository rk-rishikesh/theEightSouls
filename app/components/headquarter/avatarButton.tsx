import React from "react";
import "./avatarButton.css";

const AvatarButton = () => {
    return (
        <button className="button">
            <span className="button_lg">
                <span className="button_sl"></span>
                <span className="button_text">Select Avatar</span>
            </span>
        </button>
    );
};

export default AvatarButton;
