"use client";
import { Fragment, useEffect, useState } from "react";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import { Transition, Popover } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/solid";
import SearchInput from "../SearchFiled/SearchInput ";

export default function Topbar({ showNav, setShowNav }: any) {
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
            className={` fixed   z-40 ${
                isScrolled ? "bg-gray-300" : ""
            }  w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${showNav ? "pl-56" : ""}`}
        >
            <div className="pl-4 md:pl-16">
                <div className="w-72 flex justify-start items-center mr-5">
                    <Bars3CenterLeftIcon
                        className="h-8 w-8 text-gray-200  cursor-pointer"
                        onClick={() => {
                            setShowNav(!showNav);
                        }}
                    />
                </div>
            </div>

            <div className="flex justify-between  pr-4  md:pr-16">
                <div>
                    <SearchInput />
                </div>
                <Popover className=" relative   ">
                    <Popover.Button className=" flex justify-center     outline-none mr-5 md:mr-5 cursor-pointer text-gray-700">
                        <BellIcon className="h-[40px] w-[30px] shadow-lg rounded" />
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform scale-95"
                        enterTo="transform scale-100"
                        leave="transition ease-in duration=75"
                        leaveFrom="transform scale-100"
                        leaveTo="transform scale-95"
                    >
                        <Popover.Panel className="absolute -right-16 sm:-right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen ">
                            <div className=" relative p-3">
                                <div className="felx justify-between items-center w-full">
                                    <p className=" text-gray-700 font-medium ">notification</p>
                                    <a className="text-orange-500 text-sm">Mark all read</a>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </div>
        </div>
    );
}
