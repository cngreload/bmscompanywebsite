"use client";
import React from "react";
import ClinicianText from "./ClinicianText";
import Image from "next/image";

const CliniciansIntro: React.FC = () =>
{
    return (
        <section id="clinicans" className="flex flex-col lg:flex-row items-center justify-between h-auto w-full lg:p-8 px-4 py-8 gap-8 lg:gap-[12rem] overflow-x-hidden">
            {/* Text Section */ }
            <div className="flex-1 w-full text-center lg:text-left">
                <ClinicianText />
            </div>

            {/* Image Section */ }
            <div className="flex-1 flex items-center justify-center">
                <Image
                    src="/png/irmap.png"
                    alt="نقشه ایران زمین"
                    height={ 400 }
                    width={ 400 }
                    className="max-w-full h-auto rounded-sm"
                />
            </div>
        </section>
    );
};

export default CliniciansIntro;
