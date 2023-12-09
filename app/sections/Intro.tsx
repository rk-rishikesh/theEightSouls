import "../animations/animate.css";
import AnimatedTitle from "../animations/AnimatedTitle.tsx";
import AnimatedWords from "../animations/AnimatedWords.tsx";
import { motion } from "framer-motion";
import ContactBackground from "../components/background/ContactBackground.tsx";
import React from "react";

const Intro = () => {


    return (

        <><motion.section
            className="relative z-10 flex h-[85vh] w-full items-center justify-center overflow-hidden py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28"
            id="contact"
            initial="initial"
            animate="animate"
        >


            <ContactBackground />

            <div className="mx-auto  flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">

                <div
                    className={`flex flex-col items-start justify-center relative w-full sm:items-center lg:max-w-[1440px] `}
                >
                    <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7]  sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">

                        <AnimatedTitle
                            text={"T"}
                            className={
                                "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                            }
                            wordSpace={"mr-[0.25em]"}
                            charSpace={"mr-[0.01em]"}
                        />


                        <AnimatedTitle
                            text={"H"}
                            className={
                                "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                            }
                            wordSpace={"mr-[0.25em]"}
                            charSpace={"mr-[0.01em]"}
                        />

                        <AnimatedTitle
                            text={"E"}
                            className={
                                "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                            }
                            wordSpace={"mr-[0.25em]"}
                            charSpace={"mr-[0.01em]"}
                        />

                     
                    </div>


                    <AnimatedWords
                        title={"Eight"}
                        style={
                            "flex max-w-[50px] flex-col items-start text-left text-[50px] uppercase leading-[0.8em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[150px] md:text-[150px] lg:text-center lg:text-[120px] xl:text-[350px]"
                        }
                    />
                    <div className="mt-16 flex gap-10 text-[16px] font-bold text-[#e4ded7]  sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">

                        <AnimatedTitle
                            text={"S"}
                            className={
                                "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                            }
                            wordSpace={"mr-[0.25em]"}
                            charSpace={"mr-[0.01em]"}
                        />


                        <AnimatedTitle
                            text={"O"}
                            className={
                                "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                            }
                            wordSpace={"mr-[0.25em]"}
                            charSpace={"mr-[0.01em]"}
                        />

                        <AnimatedTitle
                            text={"U"}
                            className={
                                "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                            }
                            wordSpace={"mr-[0.25em]"}
                            charSpace={"mr-[0.01em]"}
                        />

                        <AnimatedTitle
                            text={"L"}
                            className={
                                "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                            }
                            wordSpace={"mr-[0.25em]"}
                            charSpace={"mr-[0.01em]"}
                        />

                        <AnimatedTitle
                            text={"S"}
                            className={
                                "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                            }
                            wordSpace={"mr-[0.25em]"}
                            charSpace={"mr-[0.01em]"}
                        />

                    </div>
                </div>

            </div>
        </motion.section></>

    );
};

export default Intro;
