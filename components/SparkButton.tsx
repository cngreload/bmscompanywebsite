"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
export function SparklesButton ()
{
    return (
        <div className="relative items-center h-16 w-48 bg-white rounded-md flex justify-center overflow-hidden group cursor-pointer">
            {/* Button Text */ }
            <h1 className="text-2xl font-bold text-green-600 z-10">
                ورود به کلینیکانز
            </h1>

            {/* SparklesCore Background */ }
            <div className="absolute inset-0 z-0">
                <SparklesCore
                    background="transparent"
                    minSize={ 0.5 }
                    maxSize={ 2 }
                    particleDensity={ 300 }
                    particleColor={ [ "#00FF00", "#800080", "#000000", "#FFC0CB" ] }
                    className="w-full h-full"
                />
            </div>

            {/* Border Effect on Hover */ }
            <div className="absolute inset-0 rounded-md border-2 border-transparent group-hover:border-purple-600 transition-all duration-300"></div>
        </div>
    );
}
