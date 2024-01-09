"use client"
import React, {useState} from 'react';
import Dropdown from './Dropdown';

const Navbar = () => {
    const [isClosed, setIsClosed] = useState("true");

    return (
        <nav className="shadow-lg mb-12" style={{zIndex: "100"}}>
            <div className="px-4 py-3 flex justify-between items-center">
                {/* Logo or Brand (you can add your logo or brand here) */}
                <div className="flex items-center rounded-full border-2 border-white w-9 h-9"
                    style={{ zIndex: "100" }}
                >
                    <a href="/" className="text-white font-semibold text-md mx-auto">
                        H
                    </a>
                </div>

                {/*Hamburger menu for mobile */}
                <div className="flex sm:hidden items-center"
                    style={{ zIndex: "100" }}
                >
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => {
                            setIsClosed((closed) => !closed);
                            console.log("Hii");
                        }}
                        aria-label="Toggle Menu"
                    >
                        <svg
                            className="h-8 w-8 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isClosed ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6H20M4 12H20M4 18H20"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            ) : (
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            )}
                        </svg>
                    </button>
                </div>

                {/* Navbar links for medium screen */}
                <div
                    className={`absolute sm:relative sm:flex sm:items-center sm:w-auto ${isClosed ? "hidden" : ""}`}
                    style={{
                        zIndex: "100",
                        ...(
                            !isClosed && {
                                top: "100px",
                                background: "black",
                                zIndex: 100,
                                opacity: 0.9,
                                width: "100vw",
                                paddingLeft: "15%",
                                paddingBottom: "10px",
                                left: "0"
                            }
                        )
                    }}
                >
                    <div className="text-md">
                        <a
                            href="/"
                            className="block sm:inline-block mt-4 sm:mt-0 text-white hover:text-gray-300 mr-10"
                        >
                            Home
                        </a>
                        <a
                            href="/blog"
                            className="block sm:inline-block mt-4 sm:mt-0 text-white hover:text-gray-300 mr-10"
                        >
                            Blog
                        </a>
                        <span className='mr-10'>
                            <Dropdown titleLink="/about" title="About" options={[{ label: "Brief Intro", link: "/about#intro" }, { label: "Skills", link: "/about#skills" }, { label: "Projects", link: "/about#projects" }, { label: "Programming", link: "/about#cp" }]} />
                        </span>
                        <a
                            href="/contact"
                            className="block sm:inline-block mt-4 sm:mt-0 text-white hover:text-gray-300 mr-10"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
