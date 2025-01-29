'use client';

import React from "react";
import { FirstModal } from "./FirstModal";
import { SecondModal } from "./SecondModal";
import { ThirdModal } from "./ThirdModal";

const Story: React.FC = () =>
{
    return (
        <section className="w-full px-4 py-6 md:py-8 lg:py-10 overflow-x-hidden">
            {/* Title */ }
            <p className=" text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold py-4 rounded-md">
                ظهور سامانه نوین : نوید احیای طرحی ملی
            </p>

            {/* Modal Section */ }
            <div className="flex flex-row gap-4 md:gap-8 justify-center items-center mt-10">
                <div className="w-1/4 sm:w-1/5 lg:w-auto">
                    <FirstModal />
                </div>
                <div className="w-1/4 sm:w-1/5 lg:w-auto">
                    <SecondModal />
                </div>
                <div className="w-1/4 sm:w-1/5 lg:w-auto">
                    <ThirdModal />
                </div>
            </div>
        </section>
    );
};

export default Story;
