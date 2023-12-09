import React from "react";
import "./ranking.css";

const Ranking = () => {
    return (
        <div className="rankcards">
            <div className="outlinePage">
                <img className="trophy w-32 h-32" src="/Trainee.png" alt=""/>
                <p className="ranking_number"><span className="ranking_word">Trainee</span></p>
                <div className="splitLine"></div>
            </div>
            <div className="detailPage">
                <img alt="" className="w-24 mt-8 ml-2" src="https://i.ibb.co/0mw9m87/image.png" />
                <div className="gradesBox">
                    <svg
                        className="icon gradesIcon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                    >
                        <path
                            d="M382.6 805H242.2c-6.7 0-12.2-5.5-12.2-12.2V434.3c0-6.7 5.5-12.2 12.2-12.2h140.4c6.7 0 12.2 5.5 12.2 12.2v358.6c0 6.6-5.4 12.1-12.2 12.1z"
                            fill="#ea9518"
                            data-spm-anchor-id="a313x.search_index.0.i36.40193a81WcxQiT"
                            className=""
                        ></path>
                        <path
                            d="M591.1 805H450.7c-6.7 0-12.2-5.5-12.2-12.2V254.9c0-6.7 5.5-12.2 12.2-12.2h140.4c6.7 0 12.2 5.5 12.2 12.2v537.9c0 6.7-5.5 12.2-12.2 12.2z"
                            fill="#f2be45"
                            data-spm-anchor-id="a313x.search_index.0.i35.40193a81WcxQiT"
                            className=""
                        ></path>
                        <path
                            d="M804.4 805H663.9c-6.7 0-12.2-5.5-12.2-12.2v-281c0-6.7 5.5-12.2 12.2-12.2h140.4c6.7 0 12.2 5.5 12.2 12.2v281c0.1 6.7-5.4 12.2-12.1 12.2z"
                            fill="#ea9518"
                            data-spm-anchor-id="a313x.search_index.0.i37.40193a81WcxQiT"
                            className=""
                        ></path>
                    </svg>
                    <p className="gradesBoxLabel">COINS</p>
                    <p className="gradesBoxNum">1000</p>
                </div>
            </div>
        </div>

    );
};

export default Ranking;
