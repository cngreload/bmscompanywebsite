'use client';
import React, { useState } from "react";

import { UserFeatures } from "./UserFeature";
import { ClinicFeatures } from "./ClinicFeature";

const CliniciansBenefits: React.FC = () =>
{
    const [ activeTab, setActiveTab ] = useState<string | null>( null ); // No tab active initially

    return (
        <div className="relative bg-gradient-to-bottom  text-black py-16 px-4 md:px-8 lg:px-12 flex flex-col items-center text-center overflow-x-hidden">
            {/* Header Section */ }
            <div className="text-center p-6 lg:p-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                    چرا کلینیکانز را انتخاب کنیم؟
                </h2>
                <q className="text-sm sm:text-base lg:text-lg block mb-6">
                    آینده مدیریت خدمات درمانی را با کلینیکانز تجربه کنید؛ جایی که نوآوری و مراقبت به هم می‌رسند.
                </q>
                <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
                    کلینیشنز با ترکیبی از فناوری پیشرفته و طراحی کاربرمحور، راه‌حلی جامع ارائه می‌دهد که نه‌تنها فرآیندهای اداری را ساده می‌کند، بلکه مراقبت از بیماران را نیز بهبود می‌بخشد. <br />
                    از زمان‌بندی هوشمند و مدیریت ایمن داده‌ها گرفته تا تعامل با بیماران و پیش‌بینی مالی دقیق، کلینیشنز یک ابزار همه‌جانبه است که به کلینیک‌ها کمک می‌کند با کارایی و نظم بیشتری فعالیت کنند.
                </p>
            </div>

            {/* Tabs Section */ }
            <section className="w-full max-w-4xl my-8 flex flex-col items-center">
                <div className="flex space-x-4 rtl:space-x-reverse">
                    { [ "کاربر", "کلینک" ].map( ( tab ) => (
                        <button
                            key={ tab }
                            onClick={ () => setActiveTab( ( prevTab ) => ( prevTab === tab ? null : tab ) ) } // Toggle logic
                            className={ `px-4 py-2 rounded-lg transition-colors duration-300 ${ activeTab === tab
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-700"
                                }` }
                        >
                            { tab }
                        </button>
                    ) ) }
                </div>

                {/* Content Section */ }
                <div className="mt-6 text-center w-full">
                    { activeTab === "کاربر" && <UserFeatures /> }
                    { activeTab === "کلینک" && <ClinicFeatures /> }
                </div>
            </section>
        </div>
    );
};

export default CliniciansBenefits;
