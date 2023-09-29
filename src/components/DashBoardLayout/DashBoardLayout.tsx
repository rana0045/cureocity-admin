"use client";
import React from "react";
import { useEffect, useState, Fragment } from "react";
import SideBar from "./sidebar/SideBar";
import Topbar from "./topbar/Topbar";
import { Transition } from "@headlessui/react";

const DashBoardLayout = ({ children }: any) => {
    const [showNav, setShowNav] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    function handleSize() {
        if (innerWidth <= 640) {
            setShowNav(false);
            setIsMobile(true);
        } else {
            setShowNav(true);
            setIsMobile(false);
        }
    }

    useEffect(() => {
        if (typeof window != undefined) {
            addEventListener("resize", handleSize);
        }

        return () => {
            removeEventListener("resize", handleSize);
        };
    }, []);

    return (
        <>
            <Topbar
                showNav={showNav}
                setShowNav={setShowNav}
            />
            <Transition
                as={Fragment}
                show={showNav}
                enter="transform transition duration-[400ms]"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform duration-[400ms] transition ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <SideBar showNav={showNav} />
            </Transition>
            <main className={`pt-16 transition-all duration-[400ms] ${showNav && !isMobile ? "pl-56" : ""}`}>
                <div className="px-4 md:px-16">{children}</div>
            </main>
        </>
    );
};

export default DashBoardLayout;
