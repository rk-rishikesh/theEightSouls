import React from "react";

const OnboardingBackground: React.FC = () => {
    return (
        <div className="absolute inset-0">
            <img alt="Onboarding Background" className="h-full w-full object-cover" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsb2ZmaWNlMjFfZ2FtZV9wb3J0YWxfdWlfd2l0aF9ob2xvZ3JhbV9saWdodF90ZWNobm9sb2d5X185NTNkMjZjYS02MmM5LTRiNTEtYjhlMy1hY2QyM2QwMGZlNjRfMS5qcGc.jpg"/>
           
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"/>
        </div>
    );
};

export default OnboardingBackground;
