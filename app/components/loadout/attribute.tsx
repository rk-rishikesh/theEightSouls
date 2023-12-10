import React from "react";
import "./attribute.css";

const Attribute = () => {
    return (
        <div>
            <div className="mx-card">
                <div className="item item--1">

                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/game-bomb-7999865-6430464.png?f=webp" alt="" />
                    <span className="quantity"> 5 </span>
                    <span className="text text--1"> Attack </span>
                </div>
                <div className="item item--2">
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/treasure-map-7999873-6430472.png" alt="" />
                    <span className="quantity"> 3 </span>
                    <span className="text text--2"> Soul Power </span>
                </div>
                <div className="item item--3">

                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/potion-pot-7999867-6430466.png?f=webp" alt="" />
                    <span className="quantity"> 3 </span>
                    <span className="text text--3"> Healing </span>
                </div>
                <div className="item item--4">
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/game-shield-9257373-7591008.png" alt="" />
                    <span className="quantity"> 2 </span>
                    <span className="text text--4"> Defence </span>
                </div>
            </div>
        </div>
    );
};

export default Attribute;
