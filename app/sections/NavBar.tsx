"use client";
import Container from "../components/container/Container";
import React from "react";

interface Props {
    page: number;
    setPage: (arg0: number) => void;
}

const NavBar = ({
    page,
    setPage,
}: Props) => {

    const goToHeadQuarter = () => {
        setPage(3);
        console.log("Headquarter");
    };

    const goToLoadout = () => {
        setPage(4);
        console.log("Loadout");
    };

    const goToMarketplace = () => {
        setPage(5);
        console.log("Marketplace");
    };

    return (
        <>
            {page >= 3 &&
                <>
                    <nav className="nowrap fixed bottom-10 left-0 right-0 z-50 my-0 mx-auto flex items-center justify-center gap-1 px-1 py-1 text-[#e4ded7] sm:w-[383.3px] md:p-2 lg:w-[391.3px]">
                        <Container
                            width="110%"
                            height="50px"
                            color="rgba(255, 255, 255, 0.1)"
                            borderRadius={10}
                            top="0px"
                            left="0px"
                            angle={0}
                        >

                            <nav className="nowrap fixed bottom-30 left-0 right-0 z-50 my-0 mx-auto flex items-center justify-center gap-1 rounded-lg px-1 py-1 text-[#e4ded7] sm:w-[383.3px] md:p-2 lg:w-[391.3px]">
                                <div
                                    data-blobity-magnetic="false"
                                    aria-label="Scroll to Home Section"
                                >
                                    <button onClick={goToHeadQuarter}>
                                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
                                            HEADQUARTER
                                        </h4>
                                    </button>

                                </div>

                                <div
                                    data-blobity-magnetic="false"
                                    aria-label="Scroll to About Section"
                                >
                                    <button onClick={() => goToLoadout()}>
                                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
                                            LOADOUT
                                        </h4>
                                    </button>

                                </div>


                                <div
                                    data-blobity-magnetic="false"
                                    aria-label="Scroll to Contact Section"
                                >
                                    <button onClick={() => goToMarketplace()}>
                                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
                                            MARKETPLACE
                                        </h4>
                                    </button>

                                </div>

                            </nav>
                        </Container>
                    </nav>
                </>}
        </>
    );
};

export default NavBar;
