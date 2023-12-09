import React from "react";
import "./productCard.css";
import AnimatedBody from "../../animations/AnimatedBody";
import AnimatedTitle from "../../animations/AnimatedTitle";

type ProductProps = {
    uri: string;
    setOpt: (arg0: boolean) => void;
};

const ProductPage = ({
    uri,
    setOpt
}: ProductProps) => {

    const goBack = () => {
        setOpt(false);
    };

    return (
        <>
            <div>
                <iframe title="account" src="http://localhost:3000/0x26727ed4f5ba61d3772d1575bca011ae3aef5d36/1/1" width={500} height={500} style={{ borderRadius: "2%" }}></iframe>
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
                    <div className="flex">
                        <button className="sbutton ml-72 mt-16">BUY</button>
                        <button className="sbutton ml-8 mt-16" onClick={goBack}>BACK</button>
                    </div>

                </div>

            </div>
        </>
    );
};

export default ProductPage;
