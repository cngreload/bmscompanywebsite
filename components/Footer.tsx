'use client';

import Image from "next/image";
import React from "react";

const Footer: React.FC = () =>
{
    return (
        <footer className="bg-gray-800 text-white dark:bg-gray-900 dark:text-white py-8 px-4 overflow-x-hidden p-2" >
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-start md:text-right">
                {/* Company Info */ }
                <div className="flex-1 flex-row-reverse">
                    <h3 className=" text-center text-2xl sm:text-xl lg:text-2xl font-bold mb-2 dark:text-white">بارمان محور اسپادانا</h3>
                    <q className="text-sm sm:text-base lg:text-4xl text-gray-400 dark:text-gray-300">
                        حامی شما در جهان هوشمند
                    </q>
                </div>

                {/* Address and Image for Mobile */ }
                <div className="flex-1 md:hidden flex flex-col items-center justify-center">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-400 dark:text-gray-300 mb-2">
                        تهران، بلوار کشاورز، وصال شیرازی، پلاک 57
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-400 dark:text-gray-300 mb-2">
                        021-66463924
                    </p>
                    <Image
                        src="/png/address.png" // Replace with your image path
                        alt="نقشه"
                        width={ 300 } // Adjusted width for better fit
                        height={ 300 } // Adjusted height for better fit
                        className="w-full max-w-sm rounded-lg h-auto"
                    />
                </div>

                {/* Address for Desktop */ }
                <div className="flex-1 hidden md:flex flex-col items-center justify-between">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-400 dark:text-gray-300 mb-2">
                        تهران، بلوار کشاورز، وصال شیرازی، پلاک 57
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-400 dark:text-gray-300 mb-2">
                        021-66463924
                    </p>
                    <Image
                        src="/png/address.png" // Replace with your image path
                        alt="نقشه"
                        width={ 300 } // Adjusted width for better fit
                        height={ 300 } // Adjusted height for better fit
                        className="w-full rounded-lg max-w-sm h-auto"
                    />
                </div>

                {/* Copyright Info */ }
                <div className="flex-1 justify-center">
                    <p className="text-xs sm:text-sm lg:text-base text-gray-400 dark:text-gray-300">
                        تمامی حقوق این وب سایت تحت مالکیت این شرکت می باشد 1403 ©
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;