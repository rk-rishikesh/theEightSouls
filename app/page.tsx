"use client";
import React, { useState } from "react";
import { useEffectOnce, useEventListener } from 'usehooks-ts';

import PreLoader from "./components/other/PreLoader";
// import useBlobity from "./components/blobity/useBlobity";

import Blur from "./components/overlay/Blur";
import Color from "./components/overlay/Color";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
// import Intro from "./sections/Intro";
// import About from "./sections/About";
// import Work from "./sections/Work";
// import Contact from "./sections/Contact";
// import Footer from "./sections/Footer";
// import Tools from "./sections/Tools.tsx";

export default function Home() {

    const [isMobile, setIsMobile] = useState(false);
    const [page, setPage] = useState(1);

    useEffectOnce(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
        setIsMobile(window.innerWidth < 768);
    });

    useEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768);
    });

    return (
        <>
            <PreLoader />
            <Blur />
            <Color />
            <NavBar page={page} setPage={setPage} />
            <main
                className="flex flex-col items-center justify-center bg-black"
            >
                <Hero page={page} setPage={setPage} />

                {/* <About /> */}
                {/* <Work />
                <Tools /> */}
                { /* <Blog /> TODO: Low Priority */}
                {/* <Contact /> */}
                {/* <Footer /> */}
            </main>
        </>
    );
}
