import React from "react";
import { Canvas } from "@react-three/fiber";
import GameApp from "../components/game/gameApp.tsx";
import {
    SOULADDRESS,
    SOULABI,
} from "../constants/souls.ts";
import detectEthereumProvider from '@metamask/detect-provider';

import { ethers } from "ethers";
import "./Game.css"

interface Props {
    page: number;
    setPage: (arg0: number) => void;
}

const Game = ({
    page,
    setPage,
}: Props) => {

    const goToHeadquarters = async () => {
        await updateRank()
        setPage(3);
    };

    const updateRank = async () => {
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

        const transaction = await soul.updateRank(1);
        console.log(transaction);
        await transaction.wait();
    };

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
                zIndex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden !important",
            }}
        >
            <div className="aim"></div>

            <button onClick={goToHeadquarters}> Finish Training</button>
            <Canvas camera={{ fov: 45 }} shadows>
                <GameApp />
            </Canvas>
        </div>
    );
};

export default Game;
