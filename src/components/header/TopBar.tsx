"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const TopBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`${isScrolled ? "hidden" : "flex"}  w-full h-[75px]   justify-center items-center bg-black mb-5`}
        >
            <div>
                <Image
                    className="mt-[10px]"
                    src="/images/cureocity-logo-white.png"
                    alt="logo"
                    width={132}
                    height={76}
                />
            </div>
        </div>
    );
};

export default TopBar;
