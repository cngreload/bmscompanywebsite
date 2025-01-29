"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Typewriter } from "react-simple-typewriter";

const EnterDigital: React.FC = () =>
{
    return (
        <div id="digital" className="w-full overflow-x-hidden px-4 py-12">
            <WavyBackground className="w-full h-[18rem] rounded-none md:rounded-lg lg:rounded-full">
                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black text-center">
                    <Typewriter
                        words={ [
                            "ورود شما به دنیای پویای دیجیتال هوشمند",
                            "آینده‌ای هوشمند در انتظار شماست",
                            "با ما همراه شوید!"
                        ] }
                        loop={ 0 } // 0 = infinite loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={ 50 }
                        deleteSpeed={ 30 }
                        delaySpeed={ 1500 }
                    />
                </h1>
            </WavyBackground>
        </div>
    );
};

export default EnterDigital;
