import React, { useState, useEffect } from "react";
import "./avatarSelection.css";

interface Props {
    page: number;
    setPage: (arg0: number) => void;
}

const AvatarSelection = ({
    page,
    setPage,
}: Props) => {


    const [cur, setCur] = useState(0);
    const [avatar, setAvatar] = useState(0);
    const [tba, setTBA] = useState(false);
    const [imgs, setImgs] = useState<string[]>([]);
    // const avatars = [
    //     "https://i.ibb.co/y5pZtjj/image.png",
    //     "https://i.ibb.co/tPzzsPq/image.png",
    //     "https://i.ibb.co/0ZVsH47/image.png",
    //     "https://i.ibb.co/MN5KP56/image.png",
    //     "https://i.ibb.co/gWKcWz2/Classic-Scorpion.png",
    //     "https://i.ibb.co/G2VTTFT/image.png"
    // ];

    const avatars = [
        "https://gateway.lighthouse.storage/ipfs/QmRhWcxW2XAeZ5fW99CyfHA1SUe8Pm69y3ATzpiaQumN9E/1.json",
        "https://gateway.lighthouse.storage/ipfs/QmRhWcxW2XAeZ5fW99CyfHA1SUe8Pm69y3ATzpiaQumN9E/2.json",
        "https://gateway.lighthouse.storage/ipfs/QmRhWcxW2XAeZ5fW99CyfHA1SUe8Pm69y3ATzpiaQumN9E/3.json",
        "https://gateway.lighthouse.storage/ipfs/QmRhWcxW2XAeZ5fW99CyfHA1SUe8Pm69y3ATzpiaQumN9E/4.json",
        "https://gateway.lighthouse.storage/ipfs/QmRhWcxW2XAeZ5fW99CyfHA1SUe8Pm69y3ATzpiaQumN9E/5.json",
        "https://gateway.lighthouse.storage/ipfs/QmRhWcxW2XAeZ5fW99CyfHA1SUe8Pm69y3ATzpiaQumN9E/6.json",
        "https://gateway.lighthouse.storage/ipfs/QmRhWcxW2XAeZ5fW99CyfHA1SUe8Pm69y3ATzpiaQumN9E/7.json",
        "https://gateway.lighthouse.storage/ipfs/QmRhWcxW2XAeZ5fW99CyfHA1SUe8Pm69y3ATzpiaQumN9E/8.json",
    ];

    useEffect( () => {
        const getAvatars = async () => {
            for(var i = 0; i < 8; i++){
                const data = await fetch(avatars[i])
                const jsonValue = await data.json()
                console.log(jsonValue);
                const img = jsonValue.image;
                console.log("https://gateway.lighthouse.storage/ipfs/" + img.slice(7))
                setImgs([...imgs, "https://gateway.lighthouse.storage/ipfs/" + img.slice(7)])
            }
        };
        getAvatars();
    });

    const handleRightClick = () => {
        console.log(cur);
        if (cur + 1 <= 9) {
            setCur(cur + 1);
        } else if (cur == 9) {
            setCur(0);
        }
    };

    const handleLeftClick = () => {
        console.log("Clicking Left");
        console.log(cur);
        if (cur - 1 >= 0) {
            setCur(cur - 1);
        } else if (cur == 0) {
            setCur(9);
        }
    };

    const selectAvatar = () => {
        setTBA(true);
        setAvatar(cur);
        console.log("Avatar");
    };

    const diveIn = () => {
        setPage(4);
        console.log("Dive In");
    };

    return (
        <div className="absolute justify-center">

            {!tba && <>
                <div className="grid grid-cols-6 gap-4">
                    <div><img alt="character" className="character" src={imgs[cur]} /></div>
                    <div><button className="leftArrow" onClick={() => handleLeftClick()}><img alt="left"  src="https://i.ibb.co/cNxXk6J/image-removebg-preview.png" /></button></div>
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
                    <div><img alt="" className="character" src={imgs[avatar]} /></div>
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
