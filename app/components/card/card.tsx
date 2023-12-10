import React, { useState, useEffect, useCallback } from "react";
import { ATTATCHMENTABI, ATTATCHMENTADDRESS } from "../../constants/attachment.ts";
import { ARMOURADDRESS } from "../../constants/armour.ts";
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from "ethers";
import { TokenboundClient, TBVersion } from '@tokenbound/sdk';
import "./card.css";

const Card = () => {

    const [att, setAtt] = useState(false);

    const handleMint = async () => {
        const provider = await detectEthereumProvider({ silent: true });
        console.log(provider);
        const ethereum: any = await window.ethereum;

        const signer = await new ethers.BrowserProvider(ethereum).getSigner();
        console.log(signer.address);
        const tokenboundClient = new TokenboundClient({
            signer,
            chainId: 137,
        });

        const gunAcc = await tokenboundClient.getAccount({
            tokenContract: ARMOURADDRESS,
            tokenId: 1,
        });

        console.log(gunAcc);

        const attactchment = new ethers.Contract(
            ATTATCHMENTADDRESS,
            ATTATCHMENTABI,
            signer
        );
        
        console.log(await attactchment.balanceOf(gunAcc, 1));
        if (await attactchment.balanceOf(gunAcc, 1) <= 0) {
            const transaction = await attactchment.mintAttachment(gunAcc, 1);
            console.log(transaction);
            await transaction.wait();
        }
        setAtt(true);
    };

    return (
        <div className="card">
            <div className="top-section">
                <div className="border"></div>
                <div className="icons">
                    <div className="logox">
                        ASSAULT11
                    </div>
                </div>
                <img alt="Card" src="https://gateway.lighthouse.storage/ipfs/QmaR4YijHbRPsUpY8GavabYZ2npW1w2dp9w3Lx1NCMicHj" />
            </div>
            <div className="bottom-section">
                <span className="title">ATTACHMENTS</span>
                <div className="attachmentCard">
                    
                    {!att && <button className="socialContainer containerOne" onClick={handleMint}>
                        Mint Free Attachment NFT
                    </button>}
                    {att && 
                    <div className="socialImgContainer">
                        <img src="https://gateway.lighthouse.storage/ipfs/Qmb5YiCjSRhVwG9PjnNUj1VeKnTCskjSGoL1sNRBR7HDyZ" alt=""/>
                </div>
                    }

                </div>
            </div>

        </div>


    );
};

export default Card;
