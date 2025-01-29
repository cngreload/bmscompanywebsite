"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const PinContainer = ( {
    children,
    title,
    href,
    className,
    containerClassName,
}: {
    children: React.ReactNode;
    title?: string;
    href?: string;
    className?: string;
    containerClassName?: string;
} ) =>
{
    const [ transform, setTransform ] = useState(
        "translate(-50%,-50%) rotateX(0deg)"
    );

    const onMouseEnter = () =>
    {
        setTransform( "translate(-50%,-50%) rotateX(40deg) scale(0.8)" );
    };
    const onMouseLeave = () =>
    {
        setTransform( "translate(-50%,-50%) rotateX(0deg) scale(1)" );
    };

    return (
        <Link
            className={ cn(
                "relative group/pin z-50 cursor-pointer",
                containerClassName
            ) }
            onMouseEnter={ onMouseEnter }
            onMouseLeave={ onMouseLeave }
            href={ href || "/" }
        >
            <div
                style={ {
                    perspective: "500px",
                    transform: "rotateX(70deg) translateZ(0deg)",
                } }
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                <div
                    style={ {
                        transform: transform,
                    } }
                    className="absolute left-1/2 top-1/2 flex justify-start items-start rounded-3xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
                >
                    <div className={ cn( "relative z-50", className ) }>
                        { children }
                    </div>
                </div>
            </div>
            <PinPerspective title={ title } href={ href } />
        </Link>
    );
};

export const PinPerspective = ( {
    title,
    href,
}: {
    title?: string;
    href?: string;
} ) =>
{
    return (
        <motion.div className="pointer-events-none w-full max-w-[90vw] lg:max-w-[30rem] h-auto flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
            <div className="w-full h-full -mt-7 flex-none inset-0">
                <div className="absolute top-0 inset-x-0 flex justify-center">
                    <a
                        href={ href }
                        target={ "_blank" }
                        className="relative flex space-x-2 items-center z-10 rounded-full bg-white py-0.5 px-4 ring-1 ring-white/10"
                    >
                        <span className="relative z-20 text-purple-600 text-lg md:text-2xl font-bold inline-block py-0.5">
                            { title }
                        </span>
                    </a>
                </div>
                <div
                    style={ {
                        perspective: "1000px",
                        transform: "rotateX(70deg) translateZ(0)",
                    } }
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                    {/* Decorative Circles */ }
                    { [ 0, 2, 4 ].map( ( delay ) => (
                        <motion.div
                            key={ delay }
                            initial={ {
                                opacity: 0,
                                scale: 0,
                                x: "-50%",
                                y: "-50%",
                            } }
                            animate={ {
                                opacity: [ 0, 1, 0.5, 0 ],
                                scale: 1,
                            } }
                            transition={ {
                                duration: 6,
                                repeat: Infinity,
                                delay,
                            } }
                            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                        ></motion.div>
                    ) ) }
                </div>
            </div>
        </motion.div>
    );
};
