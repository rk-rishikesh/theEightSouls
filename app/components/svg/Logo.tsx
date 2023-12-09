import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 100, height = 100 }) => {
    return (
        <img
            className={`w-${width} h-${height}`}
            src="/logo.svg"
            alt="Logo"
        />
    );
};

export default Logo;
