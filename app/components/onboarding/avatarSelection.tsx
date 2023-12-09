import React, { useState, useEffect, useCallback } from "react";
import { TokenboundClient, TBVersion } from '@tokenbound/sdk';
import detectEthereumProvider from '@metamask/detect-provider';
import { useSDK } from "@metamask/sdk-react";
import { ethers } from "ethers";
import {
    SOULADDRESS,
    SOULABI,
} from "../../constants/souls.ts";
import "./avatarSelection.css";

interface Props {
    page: number;
    setPage: (arg0: number) => void;
}

const AvatarSelection = ({
    page,
    setPage,
}: Props) => {

    const { sdk, connected, connecting, provider, chainId, account } = useSDK();

    const [cur, setCur] = useState(0);
    const [avatar, setAvatar] = useState(0);
    const [tba, setTBA] = useState(false);
    const [imgs, setImgs] = useState<string[]>([]);

    const avatars = [
        "https://gateway.lighthouse.storage/ipfs/QmSgW7mXE1E5u5Zr25JCqwe3a42svZ6WVenGjc6bFhMiGT",
        "https://gateway.lighthouse.storage/ipfs/QmRKitz6CU1ZS5AYpzTkLcgdJVfhdJD86HSACbbCfP1vPB",
        "https://gateway.lighthouse.storage/ipfs/QmTnmGrwJNYHRsyjYueBVM8jKZRS9vAnQHrZ6xqv7MeK38",
        "https://gateway.lighthouse.storage/ipfs/QmNpudQsdfN4ZpDDGLAjefAMKYNB8RjunxkfKVS5fhMNCb",
        "https://gateway.lighthouse.storage/ipfs/QmTLoxmwfpQSVkMD1KSK4fuzdxMT6PxFifSdvEHudYxC5H",
        "https://gateway.lighthouse.storage/ipfs/QmRT82Fhu84Q8AdJdbcraQK3gH6XvAo3vf7jpVEB2fUP2b",
        "https://gateway.lighthouse.storage/ipfs/QmY2Jna6wxUYSFqz4uF3rbaroAZ6EoLA7zVNWG4gqVXSAt",
        "https://gateway.lighthouse.storage/ipfs/QmdQSUtaLbDA3yMAGUqWYeuFxh9K2VnrGbU6dKX1xYDr6j",
    ];

    // useEffect(() => {
    //     const getAvatars = async () => {
    //         for (let i = 0; i < 8; i++) {
    //             const data = await fetch(avatars[i]);
    //             const jsonValue = await data.json();
    //             console.log(jsonValue);
    //             const img = jsonValue.image;
    //             console.log("https://gateway.lighthouse.storage/ipfs/" + img.slice(7));
    //             setImgs([...imgs, "https://gateway.lighthouse.storage/ipfs/" + img.slice(7)]);
    //         }
    //         console.log(imgs)
    //     };
    //     getAvatars();
    // },[]);

    const handleRightClick = () => {
        console.log(cur);
        console.log(imgs[cur]);
        if (cur + 1 <= 7) {
            setCur(cur + 1);
        } else if (cur == 7) {
            setCur(0);
        }
    };

    const handleLeftClick = () => {
        console.log("Clicking Left");
        console.log(cur);
        console.log(imgs[cur]);
        if (cur - 1 >= 0) {
            setCur(cur - 1);
        } else if (cur == 0) {
            setCur(7);
        }
    };

    const selectAvatar = async () => {
        await handleMint();
        setTBA(true);
        setAvatar(cur);
        console.log("Mint Avatar");
    };

    const diveIn = async () => {
        await createAccount();
        setPage(4);
        console.log("Convert to TBA");
    };

    const handleMint = async () => {
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
        console.log(await soul.balanceOf(signer.address));
        if (await soul.balanceOf(signer.address) < 0) {
            const transaction = await soul.safeMint(signer.address, 1, "1");
            console.log(transaction);
            await transaction.wait();
        }
    };

    const createAccount = useCallback(async () => {

        const ethereum: any = await window.ethereum;

        const signer = await new ethers.BrowserProvider(ethereum).getSigner();
        console.log(signer);

        const tokenboundClient = new TokenboundClient({
            signer,
            chainId: 137,
        });

        console.log(tokenboundClient);

        const account = await tokenboundClient.getAccount({
            tokenContract: SOULADDRESS,
            tokenId: 1,
        });

        console.log(account);

        console.log("Token ID : ", 1);
        if (true) {
            const createdAccount = await tokenboundClient.createAccount({
                tokenContract: "0xCB130af9A5902E19EeDCDc75248075829dd8a6A3",
                tokenId: "1",
            });
            await createdAccount.wait();
            console.log(createdAccount);
        };

    }, []);


    return (
        <div className="absolute justify-center">

            {!tba && <>
                <div className="grid grid-cols-6 gap-4">
                    <div><img alt="character" className="character" src={avatars[cur]} /></div>
                    <div><button className="leftArrow" onClick={() => handleLeftClick()}><img alt="left" src="https://i.ibb.co/cNxXk6J/image-removebg-preview.png" /></button></div>
                    <div><button className="rightArrow" onClick={() => handleRightClick()}><img alt="right" src="https://i.ibb.co/ZXV9Pt0/image.png" /></button></div>
                </div>

                <div className="relative ml-[42%] mt-2">
                    <button className="fbutton sbutton" onClick={() => selectAvatar()}>
                        SELECT AVATAR
                    </button>
                </div>
            </>}

            {tba && <>
                <div className="grid grid-cols-6 gap-4">
                    <div><img alt="" className="character" src={avatars[avatar]} /></div>
                    {/* <div><img className="leftArrow" onClick={() => handleLeftClick()} src="https://i.ibb.co/cNxXk6J/image-removebg-preview.png" /></div> */}
                    {/* <div><img className="rightArrow" onClick={() => handleRightClick()} src="https://i.ibb.co/ZXV9Pt0/image.png" /></div> */}
                </div>

                <div className="relative ml-[41%] mt-2">
                    <button className="fbutton sbutton" onClick={() => diveIn()}>
                        GET READY TO FIGHT
                    </button>
                </div>
            </>}

        </div>
    );
};

export default AvatarSelection;
