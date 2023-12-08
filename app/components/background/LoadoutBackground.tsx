import React from "react";

const LoadoutBackground: React.FC = () => {
    return (
        <div className="absolute inset-0">
            <img alt="Loadout Background" className="h-full w-full object-cover" src="https://d.newsweek.com/en/full/1557247/custom-loadouts-call-duty.jpg"/>
           
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"/>
        </div>
    );
};

export default LoadoutBackground;
