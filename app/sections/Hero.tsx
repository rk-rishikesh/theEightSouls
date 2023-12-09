
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground.tsx";
import React, { useState } from "react";
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

    const getTheGun = () => {
        setLoadout(1);
        console.log("Get The Gun");
    };

    const playNow = () => {
        setFirstTime(true);
        console.log("Get The Gun");
    };

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
                                        <Card />
                                        <Card />
                                        <Card />
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
                                            <img className="w-[50%] ml-52" src="https://www.gamechampions.com/media/9251/m4-with-no-attachments-in-call-of-duty-mw2.png?width=494&height=176&mode=max" alt="" />
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
                                            <img className="w-[50%] ml-52" src="https://www.gamechampions.com/media/9251/m4-with-no-attachments-in-call-of-duty-mw2.png?width=494&height=176&mode=max" alt="" />
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
                        Game
                    </div>

                </>}
        </>
    );
};

export default Hero;