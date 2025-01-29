"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

export function AnimatedPin2 ()
{
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center px-4 py-8 md:py-12 lg:py-16">
            <PinContainer href="#digital" title="اتوماسیون هوشمند">
                <div className="flex flex-col items-center rounded-2xl tracking-tight text-slate-100/50 w-[12.5rem] h-[12.5rem] sm:w-[15rem] sm:h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] lg:h-[25rem] space-y-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-purple-600 text-center">
                        سامانه
                    </h3>
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-center">
                        <span className="text-slate-500">
                            <Image
                                src="/png/icts.png"
                                alt="اتوماسیون هوشمند"
                                width={ 1000 }
                                height={ 1000 }
                                className="rounded-lg"
                            />
                        </span>
                    </div>
                    {/* <div className="flex flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */ }
                </div>
            </PinContainer>
        </div>
    );
}
