import React from "react";
import "./Loading.css";

const Loading = () => {
    return (
        <div
            className="gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
            style={{
                height: "100vh",
                width: "100%",
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 55,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden !important",
            }}
        >

            <div className="loader">
                <img className="mt-8" src="/loader.png" alt=""/>
                <span></span>
            </div>
            <div className="sub hidden"></div>
        </div>

    );
};

export default Loading;
