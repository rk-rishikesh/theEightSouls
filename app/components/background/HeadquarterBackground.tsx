import React from "react";

const HeadquarterBackground: React.FC = () => {
    return (
        <div className="absolute inset-0">
            <img alt="Headquarter Background" className="h-full w-full object-cover" src="https://w0.peakpx.com/wallpaper/37/729/HD-wallpaper-ghost-recon-future-soldier-ps3-xbox-360-ubisoft-future-soldier-ghost-recon-tom-clancys-pc.jpg"/>
           
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"/>
        </div>
    );
};

export default HeadquarterBackground;
