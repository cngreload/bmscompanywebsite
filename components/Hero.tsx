'use client';
import React from "react";
import HeroText from "./HeroText";
import ThreeCircleTech from "./HeroTech";

const Hero: React.FC = () =>
{
    return (
        <section id="hero" className="flex flex-col lg:flex-row h-fit w-full">
            {/* Hero Text */ }
            <div className="w-full lg:w-1/2 flex justify-center items-center">
                <HeroText />
            </div>

            {/* ThreeCircleTech Animation */ }
            <section className="w-full lg:w-1/2 lg:-mt-24">
                <ThreeCircleTech />
            </section>
        </section>
    );
};

export default Hero;
