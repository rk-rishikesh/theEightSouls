"use client";
import React, { useState } from "react";
import { useEffectOnce, useEventListener } from 'usehooks-ts';
import PreLoader from "./components/other/PreLoader.tsx";

import Blur from "./components/overlay/Blur.tsx";
import Color from "./components/overlay/Color.tsx";

import NavBar from "./sections/NavBar.tsx";
import Hero from "./sections/Hero.tsx";
// import { init } from "@airstack/airstack-react";
// init(process.env.REACT_APP_AIRSTACK_API_KEY);
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
            </main>
        </>
    );
}
