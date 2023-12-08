import React from "react";

const MarketplaceBackground: React.FC = () => {
    return (
        <div className="absolute inset-0">
            <img alt="Marketplace Background" className="h-full w-full object-cover" src="https://c4.wallpaperflare.com/wallpaper/633/966/451/sci-fi-warrior-futuristic-weapon-wallpaper-preview.jpg"/>
           
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"/>
        </div>
    );
};

export default MarketplaceBackground;
