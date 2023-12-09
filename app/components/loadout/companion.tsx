import React from "react";
import "./companion.css";

const Companion = () => {
    return (
        <>
            {
                true &&
                <>
                    <div className="ccard">
                        <div className="img">
                            <img alt="" src="https://i.pinimg.com/originals/bc/f3/a3/bcf3a371b9303c27752e1109e96a2fe6.gif" />
                        </div>
                        <div className="textBox">
                            <div className="textContent">
                                <p className="h1">Drone</p>
                                <span className="span"> AI Suggested*</span>
                            </div>

                            <button className="cta">
                                <span>Get Now !</span>
                                {/* <svg viewBox="0 0 13 10" height="10px" width="15px">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg> */}
                            </button>
                            <div>
                            </div></div>
                    </div>
                </>
            }
            {
                false &&
                <div className="gif">
                    <img alt="" src="https://i.pinimg.com/originals/bc/f3/a3/bcf3a371b9303c27752e1109e96a2fe6.gif" />
                    {/* <img alt="" src="https://media.baamboozle.com/uploads/images/125978/1650296979_456726_gif-url.gif"/> */}
                    {/* <img alt=""src="https://pa1.aminoapps.com/7204/f113255c7b4c272981f9fdca47eac52a89e481aer1-201-166_00.gif"/> */}
                    {/* <img alt="" src="https://media0.giphy.com/media/U6YxrKZ84AfppW48r4/giphy.gif?cid=6c09b952ig337w2z59n3v2926tifbpftsnrtyw7vz71m308o&ep=v1_stickers_related&rid=giphy.gif&ct=s"/> */}
                </div>
            }

        </>

    );
};

export default Companion;
