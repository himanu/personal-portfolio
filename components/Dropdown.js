// components/Dropdown.js
"use client"
import { useState } from 'react';
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

const Dropdown = ({ options, title, titleLink }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const openDropdown = () => {
        setIsOpen(true);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left mb-3" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
            <div className='justify-between inline-flex items-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                <a
                    type="button"
                    onClick={toggleDropdown}
                    href={titleLink}
                >
                    {title}
                </a>
                {isOpen ? <GoChevronUp /> : <GoChevronDown/> }
            </div>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" onMouseEnter={openDropdown} >
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {options.map((option, index) => (
                            <a
                                key={index}
                                href={option.link}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                                onClick={toggleDropdown}
                            >
                                {option.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
