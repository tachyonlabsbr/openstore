"use client";

import React, { useState } from "react";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex bg-white/60  items-center justify-between flex-wrap p-3 fixed w-full z-10 top-0">
            <div className="flex items-center flex-shrink-0 text-black-500 mr-6 lg:mr-72">
                <h1 className="text-2xl font-bold text-blue-600 leading-none tracking-tight ">
                    OpenStore
                </h1>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    <svg
                        className={`fill-current h-3 w-3 ${
                            isOpen ? "hidden" : "block"
                        }`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-3 w-3 ${
                            isOpen ? "block" : "hidden"
                        }`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div
                className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
                    isOpen ? "block" : "hidden"
                } `}
            >
                <div className="text-sm lg:flex-grow">
                    <a
                        href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
                    >
                        Cloud
                    </a>
                    <a
                        href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
                    >
                        Plataform
                    </a>
                    <a
                        href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
                    >
                        Demo
                    </a>
                    <a
                        href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
                    >
                        Documentation
                    </a>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;
