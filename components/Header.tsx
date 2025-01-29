'use client';
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () =>
{
    const [ isOpen, setIsOpen ] = useState( false );

    return (
        <header className="sticky top-0 z-50 bg-white flex items-center flex-row-reverse  justify-between px-4 md:px-10 h-[5rem] opacity-60">
            {/* Left Section: BMS Logo */ }
            <div className="flex items-center">
                <Image
                    src="/svg/bmslogo.svg"
                    alt="BMS Logo"
                    width={ 80 }
                    height={ 80 }
                    className="w-20"
                />
            </div>

            {/* Center Section: Navigation Links */ }
            <nav
                className={ `absolute top-[5rem] right-0 bg-white p-4 flex flex-col items-end gap-4 w-full md:static md:p-0 md:flex md:flex-row md:items-center md:justify-center md:gap-8 transition-all duration-300 ${ isOpen ? "block" : "hidden"
                    }` }
            >
                <a
                    href="#hero"
                    className="text-gray-800 hover:text-blue-500 focus:text-blue-500 font-medium transition-colors duration-200"
                >
                    خانه
                </a>
                <a
                    href="#product"
                    className="text-gray-800 hover:text-blue-500 focus:text-blue-500 font-medium transition-colors duration-200"
                >
                    محصولات
                </a>
                <a
                    href="#about"
                    className="text-gray-800 hover:text-blue-500 focus:text-blue-500 font-medium transition-colors duration-200"
                >
                    درباره ما
                </a>
                <a
                    href="#media"
                    className="text-gray-800 hover:text-blue-500 focus:text-blue-500 font-medium transition-colors duration-200"
                >
                    رسانه
                </a>
                <a
                    href="#contactus"
                    className="text-gray-800 hover:text-blue-500 focus:text-blue-500 font-medium transition-colors duration-200"
                >
                    تماس با ما
                </a>
            </nav>

            {/* Right Section: Danesh Logo */ }
            <div className="flex items-center">
                <Image
                    src="/png/DaneshbonyanLogo.png"
                    alt="Danesh Logo"
                    width={ 80 }
                    height={ 80 }
                    className="w-20"
                />
            </div>

            {/* Hamburger Button for Mobile */ }
            <button
                className="md:hidden text-gray-800 focus:outline-none"
                onClick={ () => setIsOpen( !isOpen ) }
            >
                { isOpen ? <X size={ 24 } /> : <Menu size={ 24 } /> }
            </button>
        </header>
    );
};

export default Header;
