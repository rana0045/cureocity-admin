import React from "react";

const SearchInput = () => {
    return (
        <div className="relative mr-5">
            <input
                type="text"
                placeholder="Search..."
                className="py-2 px-4 pr-10 w-[485px] h-[43px] flex-shrink-0 rounded-xl text-white border border-gray-300 focus:outline-none bg-black  ml-4"
            />
            <svg
                className="absolute right-3 top-1  text-white h-10 w-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path d="M10 21h4M21 10h-4M19 6a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
    );
};

export default SearchInput;
