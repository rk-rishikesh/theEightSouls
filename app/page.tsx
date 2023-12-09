"use client";
import React, { useState } from "react";
import { useEffectOnce, useEventListener } from 'usehooks-ts';

import PreLoader from "./components/other/PreLoader";

import Blur from "./components/overlay/Blur";
import Color from "./components/overlay/Color";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";

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
