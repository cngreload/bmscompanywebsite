'use client';

import React from "react";

const Footer: React.FC = () =>
{
    return (
        <footer className="bg-gray-800 text-white py-8 px-4 overflow-x-hidden">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                {/* Company Info */ }
                <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">بارمان محور اسپادانا</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-400">
                        حامی شما در جهان هوشمند
                    </p>
                </div>



                {/* Copyright Info */ }
                <div className="flex-1">
                    <p className="text-xs sm:text-sm lg:text-base text-gray-400">
                        تمامی حقوق این وب سایت تحت مالکیت این شرکت می باشد 1403 ©
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
