import React, { useState, useEffect } from "react";
import { SOULADDRESS, SOULABI } from "../../constants/souls.ts";
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from "ethers";
import "./ranking.css";

const Ranking = () => {

    const [rank, setRank] = useState(0);

    useEffect(() => {
        const getTheRank = async () => {
            const provider = await detectEthereumProvider({ silent: true });
            console.log(provider);
            const ethereum: any = await window.ethereum;

            const signer = await new ethers.BrowserProvider(ethereum).getSigner();
            console.log(signer.address);

            const soul = new ethers.Contract(
                SOULADDRESS,
                SOULABI,
                signer
            );

            const rank = await soul.getRank(1);
            setRank(rank);
        };

        getTheRank();
    }, []);

    return (
        <div className="rankcards">
            <div className="outlinePage">
                {rank == 0 &&
                    <>
                        <img className="trophy w-32 h-32" src="/Trainee.png" alt="" />
                        <p className="ranking_number"><span className="ranking_word">Trainee</span></p>
                    </>
                }
                {rank == 1 &&
                    <>
                        <img className="trophy w-32 h-32" src="/Rookie.png" alt="" />
                        <p className="ranking_number"><span className="ranking_word">Rookie</span></p>
                    </>
                }

            </div>
        </div>

    );
};

export default Ranking;
