
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground.tsx";
import React, { useState, useEffect, useCallback } from "react";
import Card from "../components/card/card.tsx";
import OnboardingBackground from "../components/background/OnboardingBackground.tsx";
import MarketplaceBackground from "../components/background/MarketplaceBackground.tsx";
import LoadoutBackground from "../components/background/LoadoutBackground.tsx";
import HeadquarterBackground from "../components/background/HeadquarterBackground.tsx";
import ModeOneCard from "../components/headquarter/modeOneCard.tsx";
import ModeTwoCard from "../components/headquarter/modeTwoCard.tsx";
import ModeThreeCard from "../components/headquarter/modeThreeCard.tsx";
import Ranking from "../components/loadout/ranking.tsx";
import Sections from "../components/marketplace/sections.tsx";
import Companion from "../components/loadout/companion.tsx";
import Intro from "./Intro.tsx";
import Avatar from "../components/loadout/avatar.tsx";
import AvatarSelection from "../components/onboarding/avatarSelection.tsx";
import FirstButton from "../components/onboarding/firstButton.tsx";
import AnimatedBody from "../animations/AnimatedBody.tsx";
import AnimatedTitle from "../animations/AnimatedTitle.tsx";
import Loading from "./Loading.tsx";
import Attribute from "../components/loadout/attribute.tsx";
import Game from "./Game.tsx";
import { ARMOURADDRESS, ARMOURABI } from "../constants/armour.ts";
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from "ethers";
import { TokenboundClient, TBVersion } from '@tokenbound/sdk';
import { SOULADDRESS } from "../constants/souls.ts";

interface Props {
    page: number;
    setPage: (arg0: number) => void;
}

const Hero = ({
    page,
    setPage,
}: Props) => {

    const [firstTime, setFirstTime] = useState(false);
    const [loadout, setLoadout] = useState(0);

    const getTheGun = async () => {
        const provider = await detectEthereumProvider({ silent: true });
        console.log(provider);
        const ethereum: any = await window.ethereum;

        const signer = await new ethers.BrowserProvider(ethereum).getSigner();
        console.log(signer.address);

        const tokenboundClient = new TokenboundClient({
            signer,
            chainId: 137,
        });

        const soulAcc = await tokenboundClient.getAccount({
            tokenContract: SOULADDRESS,
            tokenId: 2,
        });

        console.log(soulAcc);

        const armour = new ethers.Contract(
            ARMOURADDRESS,
            ARMOURABI,
            signer
        );

        console.log(await armour.balanceOf(soulAcc));
        if (await armour.balanceOf(soulAcc) <= 0) {
            const transaction = await armour.safeMint(soulAcc, 2, "2");
            console.log(transaction);
            await transaction.wait();
            setLoadout(1);
        } else {
            setFirstTime(true);
        }
        
        console.log("Get The Gun");
    };

    const playNow = useCallback(async () => {

        const ethereum: any = await window.ethereum;

        const signer = await new ethers.BrowserProvider(ethereum).getSigner();
        console.log(signer);

        const tokenboundClient = new TokenboundClient({
            signer,
            chainId: 137,
        });

        console.log(tokenboundClient);

        const account = await tokenboundClient.getAccount({
            tokenContract: ARMOURADDRESS,
            tokenId: 2,
        });

        console.log(account);

        console.log("Token ID : ", 2);
            const createdAccount = await tokenboundClient.createAccount({
                tokenContract: "0xCA825651fB3b3c604a22c24F220454309E8C0635",
                tokenId: "2",
            });
            await createdAccount.wait();
            console.log(createdAccount);
            setFirstTime(true);
            console.log("Get The Gun");

    }, []);

    const enterTraining = () => {
        setPage(6);
    };

    return (
        <>
            {page == 0 &&
                <>
                    <div>
                        <Loading />
                    </div>

                </>}
            {/* Page 1 : Main Screen */}
            {page == 1 &&
                <>
                    <motion.section
                        className="relative z-10 flex h-[100vh] w-full justify-center"
                        id="home"
                        initial="initial"
                        animate="animate"
                    >
                        <HeroBackground />
                        <div className="relative mt-[45%]">
                            <FirstButton page={page} setPage={setPage} txt="ENTER" />
                        </div>
                    </motion.section>

                    <Intro />

                </>
            }

            {/* Page 2 : User Onboarding */}
            {page == 2 &&
                <div className="relative z-10 flex h-[100vh] w-full">
                    <OnboardingBackground />
                    <div>
                        <AvatarSelection page={page} setPage={setPage} />
                    </div>
                </div>
            }

            {/* Page 3 : Headquarters */}
            {page == 3 &&
                <div className="relative z-10 flex h-[100vh] w-full">
                    <HeadquarterBackground />
                    <div className="mt-32 ml-8 object-left-bottom flex flex-col gap-5">
                        {/* <HeadquarterBox /> */}
                        <button onClick={enterTraining}><ModeOneCard /></button>

                        <ModeTwoCard />
                        <ModeThreeCard />
                    </div>
                </div>
            }

            {/* Page 4 : Loadout */}
            {page == 4 &&
                <div className="relative z-10 flex h-[100vh] w-full">
                    <LoadoutBackground />
                    {
                        firstTime && <>
                            <div className="overflow-x-scroll no-scrollbar items-center justify-center sm:mt-0">
                                <div
                                    className={`relative items-center justify-center`}
                                >
                                    <div className="mt-20 ml-20 pb-24 grid grid-cols grid-flow-row gap-4">
                                        <Ranking />
                                        <Attribute />
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-x-scroll no-scrollbar items-center justify-center pl-[43%] sm:mt-0">
                                <div
                                    className={`relative items-center justify-center`}
                                >
                                    <div className="mt-20 ml-20 pb-24 grid grid-cols grid-flow-row gap-4">
                                        <Card />
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="absolute ml-60 mt-20">

                                <Avatar />
                            </div>
                            <div className="absolute">
                                <Companion />
                            </div>
                        </>
                    }
                    {
                        !firstTime &&
                        <>
                            <div>
                                <img
                                    src="https://4kwallpapers.com/images/wallpapers/call-of-duty-modern-warfare-2-2022-games-call-of-duty-2048x1536-8571.jpg"
                                    alt="s"
                                    className="absolute h-full left-0 opacity-50"
                                />
                                {
                                    loadout == 0 && <>
                                        <div
                                            className={`absolute text-white right-0 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60  lg:mr-4 mb-10  md:mb-16 lg:mb-14 `}
                                        >
                                            <AnimatedTitle
                                                text="Let's start the training"
                                                className={
                                                    "ml-72 mt-[-10%] max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none"
                                                }
                                                wordSpace={"mr-[0.25em]"}
                                                charSpace={"-mr-[0.01em]"}
                                            />
                                            <AnimatedBody
                                                text="You have been chosen to lead the resistance against the Vanguard"
                                                className={
                                                    "ml-72 mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D] "
                                                }
                                            />
                                            <img className="w-[50%] ml-52" src="https://gateway.lighthouse.storage/ipfs/QmaR4YijHbRPsUpY8GavabYZ2npW1w2dp9w3Lx1NCMicHj" alt="" />
                                            <button className="sbutton ml-72 mt-16" onClick={getTheGun}>GET THE GUN</button>
                                        </div>
                                    </>
                                }
                                {
                                    loadout == 1 && <>
                                        <div
                                            className={`absolute text-white right-0 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60  lg:mr-4 mb-10  md:mb-16 lg:mb-14 `}
                                        >
                                            <AnimatedTitle
                                                text="Get Ready for the war"
                                                className={
                                                    "ml-72 mt-[-10%] max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none"
                                                }
                                                wordSpace={"mr-[0.25em]"}
                                                charSpace={"-mr-[0.01em]"}
                                            />
                                            <AnimatedBody
                                                text="HEAD TOWARDS LOADOUT AND CUSTOMIZE YOUR GUN"
                                                className={
                                                    "ml-72 mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D] "
                                                }
                                            />
                                            <img className="w-[50%] ml-52" src="https://gateway.lighthouse.storage/ipfs/QmaR4YijHbRPsUpY8GavabYZ2npW1w2dp9w3Lx1NCMicHj" alt="" />
                                            <button className="sbutton ml-72 mt-16" onClick={playNow}>CUSTOMIZE ARMOR</button>
                                        </div>
                                    </>
                                }

                            </div>
                        </>

                    }

                </div>
            }

            {/* Page 5 : Marketplace */}
            {page == 5 &&
                <div className="relative z-10 flex h-[100vh] w-full">
                    <MarketplaceBackground />
                    <div>
                        <Sections />
                    </div>
                </div>
            }

            {/* Page 6 : Training Game */}
            {page == 6 &&
                <>
                    <div>
                        <Game page={page} setPage={setPage} />
                    </div>

                </>}
        </>
    );
};

export default Hero;