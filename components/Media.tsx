"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { FaRegNewspaper } from "react-icons/fa"; import Link from "next/link";
import { GrGallery } from "react-icons/gr";

export function BentoGridMedia ()
{
    return (
        <section id="media" className="pt-6 pb-24">
            <p className="text-center pb-10 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold py-4 rounded-md">
                رسانه
            </p>
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                { items.map( ( item, i ) => (
                    <BentoGridItem
                        key={ i }
                        title={ item.title }
                        description={ item.description }
                        header={ item.header }
                        className={ cn( "[&>p:text-lg]", item.className ) }
                        icon={ item.icon }
                    />
                ) ) }
            </BentoGrid>
        </section>
    );
}

// const SkeletonOne = () =>
// {
//     const variants = {
//         initial: {
//             x: 0,
//         },
//         animate: {
//             x: 10,
//             rotate: 5,
//             transition: {
//                 duration: 0.2,
//             },
//         },
//     };
//     const variantsSecond = {
//         initial: {
//             x: 0,
//         },
//         animate: {
//             x: -10,
//             rotate: -5,
//             transition: {
//                 duration: 0.2,
//             },
//         },
//     };

//     return (
//         <motion.div
//             initial="initial"
//             whileHover="animate"
//             className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
//         >
//             <motion.div
//                 variants={ variants }
//                 className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black cursor-pointer"
//             >
//                 <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
//                 <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
//             </motion.div>
//             <motion.div
//                 variants={ variantsSecond }
//                 className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black cursor-pointer"
//             >
//                 <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
//                 <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
//             </motion.div>
//             <motion.div
//                 variants={ variants }
//                 className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black cursor-pointer"
//             >
//                 <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
//                 <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
//             </motion.div>
//         </motion.div>
//     );
// };

const SkeletonTwo = () =>
{
    const variants = {
        initial: {
            width: 0,
        },
        animate: {
            width: "100%",
            transition: {
                duration: 0.2,
            },
        },
        hover: {
            width: [ "0%", "100%" ],
            transition: {
                duration: 2,
            },
        },
    };
    const arr = new Array( 6 ).fill( 0 );
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            { arr.map( ( _, i ) => (
                <motion.div
                    key={ `skeleton-two-${ i }` }
                    variants={ variants }
                    style={ {
                        maxWidth: Math.random() * ( 100 - 40 ) + 40 + "%",
                    } }
                    className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-green-400 dark:bg-black w-full h-4"
                ></motion.div>
            ) ) }
        </motion.div>
    );
};

const SkeletonThree = () =>
{
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: [ "0, 50%", "100% 50%", "0 50%" ],
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={ variants }
            transition={ {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
            } }
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
            style={ {
                background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
                backgroundSize: "400% 400%",
            } }
        >
            <motion.div className="h-full w-full rounded-lg"></motion.div>
        </motion.div>
    );
};

const items = [
    {
        title: (
            <Link className=" text-sm lg:text-3xl" href="./interviewcto">
                مصاحبه متنی
            </Link>

        ),
        description: (
            <Link href="./interviewcto" className="text-sm">
                روایت هم بنیان گزار از چالش های فنی تا کار با نیروی متخصص</Link> ),
        header: (
            <Link href="./interviewcto">
                <SkeletonThree />
            </Link>
        ),
        className: "md:col-span-1",
        icon: <FaRegNewspaper className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: (
            <Link href="./interviewceo">
                مقاله جامعه شرکت
            </Link>

        ),
        description: (
            <Link href="./interviewceo" className="text-sm">
                مصاحبه متنی با مدیر عامل
            </Link>
        ),
        header: (
            <Link href="./interviewceo">
                <SkeletonTwo />
            </Link>
        ),
        className: "md:col-span-1",
        icon: <FaRegNewspaper className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: (
            <Link href="./comic">
                گالری
            </Link>

        ),
        description: (
            <Link href="./comic" className="text-sm">
                شرکت به روایت تصویر            </Link>
        ),
        header: (
            <Link href="./comic">
                <SkeletonThree />
            </Link>
        ),
        className: "md:col-span-1",
        icon: <GrGallery className="h-4 w-4 text-neutral-500" />,
    },
];